import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Pofile = () => {
  const [user] = useAuthState(auth)
    return (
      <div className="flex justify-center m-10 flex-col-reverse lg:flex-row text-center">
      <div className="">
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Your location </span>
          </label>
          <input
            type="text"
            placeholder="location "
            name="location"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Your Education</span>
          </label>
          <input
            type="text"
            placeholder="education"
            name="education"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Social profile link</span>
          </label>
          <input type="text"
          name='socialLink'
          placeholder="Social link" class="input input-bordered" 
          required />
        </div>
      </div>
      <div className="">
        <div className="">
          <div class="avatar">
          {user.photoURL ? <img class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={user?.photoURL} alt="" /> : <img class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"src="https://findicons.com/files/icons/61/dragon_soft/128/user.png" alt="" />
        }
          </div>
        </div>
        <div className="ml-5">
          <p>Name: {user.displayName}</p>
          <p>userId: {user.metadata?.createdAt}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
    );
};

export default Pofile;