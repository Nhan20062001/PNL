const HEIGHT_HEADER_ADMIN = 64;
const WIDTH_SIDEBAR_ADMIN = 200;

export { HEIGHT_HEADER_ADMIN, WIDTH_SIDEBAR_ADMIN };

// eslint-disable-next-line no-shadow
export enum NotificationTypeEnum {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

// title button when click add or update
// eslint-disable-next-line no-shadow
export enum AppActionEnum {
  create = 'create',
  update = 'update',
  delete = 'delete',
  reset = 'reset',
}

// eslint-disable-next-line no-shadow
export enum AppConfirmModalEnum {
  delete = 'delete',
  confirm = 'confirm',
  info = 'info',
  warning = 'warning',
}

// eslint-disable-next-line no-shadow
export enum FileTypeEnum {
  image = 'IMAGE',
  video = 'VIDEO',
  file = 'FILE',
}

const path = (root: string, sublink: string) => `${root}${sublink}`;

export const PAGE_PATH_COMMON = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
};

// client
const ROOTS_CLIENT = '/';

export const CLIENT_PATH = {
  root: ROOTS_CLIENT,
  error: {
    page403: '/403',
    page404: '/404',
    page500: '/500',
  },
};

// admin
const ROOTS_ADMIN = '/admin';

export const ADMIN_PATH = {
  root: ROOTS_ADMIN,
  dashboard: {
    root: path(ROOTS_ADMIN, '/dashboard'),
  },
  user: {
    root: path(ROOTS_ADMIN, '/user'),
    new: path(ROOTS_ADMIN, '/user/new'),
    list: path(ROOTS_ADMIN, '/user/list'),
    edit: (name: string) => path(ROOTS_ADMIN, `/user/${name}/edit`),
  },
  error: {
    page403: '/403',
    page404: '/404',
    page500: '/500',
  },
};

export const LOGO_LOGIN_AMDIN = 'https://res.cloudinary.com/dlcvpix8s/image/upload/v1696488184/sata/vtgrcnzfvsqiv0pyh7aa.png';
