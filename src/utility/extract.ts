export const extrackYear = (year: string) => {
  const parsedYear = parseInt(year, 10);
  let suffit = year.slice(-2);
  if (parsedYear >= 2000) {
    suffit = parseInt(suffit, 10).toString();
  }
  return suffit;
};

export function readFile(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event: ProgressEvent<FileReader>) {
      resolve(event.target?.result);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsText(file); // 파일 내용을 텍스트로 읽습니다.
  });
}
