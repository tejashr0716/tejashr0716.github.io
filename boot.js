const { useState, useEffect, useRef } = React;
const FM = window.Motion || {};
const motion = FM.motion || {};
const useScroll = FM.useScroll;
const useTransform = FM.useTransform;

function motionTag(tag) {
  if (motion.create) return motion.create(tag);
  return motion[tag] || motion.div || 'div';
}
