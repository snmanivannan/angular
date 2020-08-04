import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";


@Injectable({
  providedIn: 'root',
})
export class SrvNewsService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    text: new FormControl(''),
    link: new FormControl(''),
    desc: new FormControl(''),
    likes: new FormControl(''),
    views: new FormControl(''),
    createdOn: new FormControl(new Date()),
  });


  getNewsList() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  createPosts(data) {
    console.log('services')
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('posts')
        .add(data)
        .then(
          (res) => { console.log('success') },
          (err) => reject(err)
        );
    });
  }
 
}
