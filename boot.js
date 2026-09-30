window.useState = React.useState;
window.useEffect = React.useEffect;
window.useRef = React.useRef;
window.FM = window.Motion || {};
window.motion = (window.Motion && window.Motion.motion) || {};
window.useScroll = window.Motion && window.Motion.useScroll;
window.useTransform = window.Motion && window.Motion.useTransform;
window.motionTag = function (tag) {
  if (window.motion.create) return window.motion.create(tag);
  return window.motion[tag] || window.motion.div || 'div';
};
