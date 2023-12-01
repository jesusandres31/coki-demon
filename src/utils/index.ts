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
