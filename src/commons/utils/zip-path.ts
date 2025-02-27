export const getPathFromCode = (code?: string) => {
  if (!code) {
    return '';
  }
  const codeSplittedArray = code.split('-');
  if (codeSplittedArray?.length < 3) {
    return '';
  }
  const dateString = codeSplittedArray[0];
  const userName = codeSplittedArray[1];
  const idLoan = codeSplittedArray[2];
  return `${idLoan}|||${dateString}-Vaytinchap-${userName}.zip`;
};
