// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md', '00-school/speaker-elo.md'];
}

function introSlides() {
  return ['01-intro/00-TITLE.md'];
}

function installation() {
  return ['02-installation/00-TITLE.md'];
}

function basics() {
  return ['03-basics/00-TITLE.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(), //
    ...installation(),
    ...basics()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
