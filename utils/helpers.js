export function capitalizeText(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
  