export function pad(s){
  return `00${s}`.slice(-2);
}
export function formatDate(d: number){
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${pad(day)}.${pad(month)}.${year}`;

}

export function formatTime(d: number){
  const date = new Date(d);

  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${pad(hour)}:${pad(minutes)}`;
}