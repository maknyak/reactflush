export function FirstWord(title) {
  const text = title.trim().split(" ");
  const first = text.shift();

  const heading = (text.length > 0 ? '<strong class="font-weight-bold">'+ first + '</strong> ' : first) + '<span className="font-weight-lighter">' + text.join(" ") + '</span>';
  return {__html: heading}
}