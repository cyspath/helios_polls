import { Injectable } from '@angular/core';

const avatarKey = 'duku-avatar';

@Injectable()
export class LocalStoreService {

  getAvatar() {
	  return localStorage.getItem(avatarKey);
  }

  setAvatar(avatar) {
	  localStorage.setItem(avatarKey, avatar);
	
  }
}