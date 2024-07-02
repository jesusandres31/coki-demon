/**
 * formatting
 */
export const justOneSpace = (str: string) => {
  return str.replace(/\s\s+/g, ' ');
};

export const formatDate = (date: string | null) => {
  if (date) {
    const dateObject = new Date(date);
    const formatedDate = dateObject.toLocaleDateString('en-UK');
    return formatedDate;
  }
  return '-';
};

/**
 * telegram
 */
const MAX_MESSAGE_LENGTH = 4096;

export const splitMessage = (
  message: string,
  maxLength: number = MAX_MESSAGE_LENGTH,
) => {
  const parts = [];
  while (message.length > maxLength) {
    let chunk = message.slice(0, maxLength);
    const lastNewline = chunk.lastIndexOf('\n');
    if (lastNewline > -1) {
      chunk = chunk.slice(0, lastNewline + 1);
    }
    parts.push(chunk);
    message = message.slice(chunk.length);
  }
  parts.push(message);
  return parts;
};
