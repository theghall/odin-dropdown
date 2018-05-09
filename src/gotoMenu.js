const gotoMenuClasses = {
  menuClass: 'goto-menu',
  subMenuClass: 'goto-submenu',
  dispSubMenu: 'goto-drop',
};

const gotoMenuCore = {

  isMenuItem(target) {
    const tag = target.tagName;
    // Either LI or A
    const parentNode = (tag === 'LI' ? target.parentNode : target.parentNode.parentNode);
    return parentNode.classList.contains(gotoMenuClasses.subMenuClass);
  },

  closeActiveMenu() {
    const activeMenu = document.querySelector('.' + gotoMenuClasses.dispSubMenu);
    if (activeMenu) activeMenu.classList.toggle(gotoMenuClasses.dispSubMenu);
  },

  toggleSubMenu(e) {
    const { target } = e;
    const tag = target.tagName;
    if (gotoMenuCore.isMenuItem(target)) return;
    // Either LI or A
    const subMenu = (tag === 'LI' ? target.children[1] : target.parentNode.children[1]);
    gotoMenuCore.closeActiveMenu();
    subMenu.classList.toggle(gotoMenuClasses.dispSubMenu);
  },

  addListener(elem, trigger) {
    elem.addEventListener(trigger, gotoMenuCore.toggleSubMenu);
  },

  addListeners(trigger = 'click') {
    // Grab all menus
    const menus = document.querySelectorAll('li > ul');

    for (let menuIndex = 0; menuIndex < menus.length; menuIndex += 1) {
      // Add listener to LI containing the submenu
      gotoMenuCore.addListener(menus[menuIndex].parentNode, trigger);
    }
  },
};

const gotoMenu = {
  addMenuListeners(trigger) {
    gotoMenuCore.addListeners(trigger);
  },
};

export default gotoMenu;
