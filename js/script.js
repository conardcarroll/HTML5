/*
 * Author: Matt Hernandez
 * 
 */

/*
 * Checks to see if the current browser supports details elements.
 * If details are supported, an open attribute is added to the details elements.
 */
var isDetailsSupported = (function(doc) {
  var detailsElement = doc.createElement('details'),
    fake,
    root,
    diff;
  if (!('open' in detailsElement)) {
    return false;
  }
  root = doc.body || (function() {
    var de = doc.documentElement;
    fake = true;
    return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
  }());
  detailsElement.innerHTML = '<summary>a</summary>b';
  detailsElement.style.display = 'block';
  root.appendChild(el);
  diff = el.offsetHeight;
  detailsElement.open = true;
  diff = diff != el.offsetHeight;
  root.removeChild(detailsElement);
  if (fake) {
    root.parentNode.removeChild(root);
  }
  return diff;
}(document));