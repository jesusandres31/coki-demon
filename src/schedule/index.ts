import cron from 'node-cron';
import {
  CRON_EXPRESSION,
  DB_NAME,
  DB_PATH,
  DRIVE_DB_FOLDER_ID,
  TIME_ZONE as timezone,
} from '../constants';
import fs from 'fs';
import path from 'path';
import drive from '../libs/drive';

/**
 * cron job
 */
const setupScheduler = () => {
  cron.schedule(
    CRON_EXPRESSION,
    async () => {
      try {
        if (DRIVE_DB_FOLDER_ID && DB_NAME && DB_PATH) {
          console.log(`Starting cron job.`);

          // get file path
          const filePath = path.join(DB_PATH);

          // remove old files
          await deleteFilesInFolder(DRIVE_DB_FOLDER_ID, DB_NAME);

          // upload new file
          const response = await uploadFile(
            DRIVE_DB_FOLDER_ID,
            DB_NAME,
            filePath,
          );

          console.log('Uploaded file:', response.data);
        } else {
          console.log(`Envs vars no set in scheduler.`);
        }
      } catch (e) {
        console.log(e);
      }
    },
    { timezone },
  );
};

export { setupScheduler };

/**
 * utils functions
 */

const deleteFilesInFolder = async (folder_id: string, fileName: string) => {
  const existingFiles = await drive.files.list({
    q: `name='${fileName}' and '${folder_id}' in parents`,
  });
  for (const file of existingFiles.data.files || []) {
    if (file.id) {
      await drive.files.update({
        fileId: file.id,
        requestBody: {
          trashed: true,
        },
      });
    }
  }
};

const uploadFile = async (
  folder_id: string,
  fileName: string,
  filePath: string,
) => {
  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [folder_id],
    },
    media: {
      mimeType: 'application/x-msaccess',
      body: fs.createReadStream(filePath),
    },
  });
  return response;
};
