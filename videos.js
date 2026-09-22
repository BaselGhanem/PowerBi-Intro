// Session recordings only.
// Paste each recording as the complete iframe code exactly as provided by the video host.

const DAY_VIDEOS = {
  1: `<iframe src="https://1drv.ms/v/c/a1a27fad04d192e9/IQQ1ap9rXHqTRIOXnbs6dHSyAU4SDPKYweIgT7t9-M3ZI-M" width="1920" height="1080" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
  2: `<iframe src="https://1drv.ms/v/c/a1a27fad04d192e9/IQQdzObmVlepT7WOdE4uwMxvAYXzc2tIlFNgx_WoGPSjqpk" width="1920" height="1080" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
  3: ``,
  4: ``,
  5: ``,
  6: ``,
  7: ``,
  8: ``,
  9: ``,
  10: ``
};

function getDayVideo(dayId) {
  return DAY_VIDEOS[Number(dayId)] || ``;
}

function hasDayVideo(dayId) {
  return Boolean(getDayVideo(dayId).trim());
}
