import DropDownWb from '../assets/images/DropDownWb.svg';
import DropDownOz from '../assets/images/DropDownOz.svg';
import DropDownYm from '../assets/images/DropDownYm.png';

export const SITE_URL = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  RESET_PASSWORD: '/reset-password',
  RESET_PASSWORD_UPDATE: '/reset-password/update',
  MY_ACCOUNT: '/myaccount',
  FEEDBACKS: 'feedbacks',
  PROFILE_SETTINGS: 'user/profile',
  STORE_SETTINGS: 'store/settings',
  CREATE_MARKETPLACE: 'stores/new',
  CHANGE_MARKETPLACE: 'stores/change',
  MY_STORES: 'stores',
  PRODUCTS: 'products',
  SETTINGS_EXPANDED: 'settings-expanded',
  ANALYSYS: 'analysis',
  STATISTICS: 'statistics',
  TOPUP: 'ballance/top-up', // пополнение балланса
  SETTINGS: 'settings', // какие-то настройки
  NOTIFICATIONS: 'notifications' // всплывашки пользователю
};

export const STATUS_BUTTON = {
  CLOSED: 'closed',
  SUCCESS: 'success'
};

export const API_URLS = {
  USER_LOGIN: '/user/login',
  USER_RESET: '/user/password/reset',
  USER_LOGOUT: '/user/logout',
  USER_STATUS: '/user/status',
  STORES: '/user/stores',
  USER_PROFILE: '/user/profile',
  GET_RESPONSE_RENEW: (responseId: number | string) => `/user/responses/${responseId}/renew`,
  GET_STORE: (id: number) => `/user/stores/${id}/configuration/response`,
  PRODUCT_RESPONSE_CONFIGURATION: (storeId: number | string, productId: number | string) =>
    `/user/stores/${storeId}/configuration/response/product/${productId}`,
  PRODUCTS_STATISTICS: (id: number) => `/user/stores/${id}/products-statistics`,
  FEEDBACKS_RESPONSE: (id: number | undefined) => `/user/stores/${id}/feedbacks-response`,
  RENEW_FEEDBACK_RESPONSE: (storeId: number, feedbackId: number, responseId: number) =>
    `/user/stores/${storeId}/feedbacks-response/${feedbackId}/responses/${responseId}/renew`,
  APPROVE_FEEDBACKS_RESPONSE: (storeId: number, feedbackId: number, responseId: number) =>
    `/user/stores/${storeId}/feedbacks-response/${feedbackId}/responses/${responseId}/approve`
};

export const STORES_MARKETPLACE = [
  {
    name: 'Ozon',
    image: DropDownOz
  },
  {
    name: 'YM',
    image: DropDownYm
  },
  {
    name: 'WB',
    image: DropDownWb
  }
];

export const DEF_INPUT = {
  value: '',
  error: false
};

export const LocalStorageKeys = {
  userAuth: 'userAuthSuccess',
  activeStore: 'activeStore',
  registeredUserId: 'registeredUserId',
  selectedProduct: 'selectedProduct'
};
