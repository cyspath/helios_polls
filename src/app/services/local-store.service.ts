import { Injectable } from '@angular/core';

import { Constant } from '../shared/Constant';

const avatarKey = `${Constant.AppName}-avatar`;

@Injectable()
export class LocalStoreService {

  getAvatar() {
	  return localStorage.getItem(avatarKey);
  }

  setAvatar(avatar) {
	  localStorage.setItem(avatarKey, avatar);
  }
}