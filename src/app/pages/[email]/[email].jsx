// pages/[yourPage].tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '~/config/supabase';
import { v4 as uuidv4 } from 'uuid';

export default function YourPage() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState({});
  const [profile, setProfile] = useState({});
  const [coverUrl, setCoverUrl] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [profileGambar, setProfileGambar] = useState(null);
  const [profileCover, setProfileCover] = useState(null);
  const [profileNama, setProfileNama] = useState('');
  const [profileJenis, setProfileJenis] = useState('');

  useEffect(() => {
    async function init() {
      const { query } = router;
      
      if (query.email === 'me') {
        // Your existing init function code here
      }

      // Fetch coverUrl and avatarUrl and set the state
      const coverPublicUrl = await supabase.storage.from('cover').getPublicUrl(`public/${profile.cover}`);
      const avatarPublicUrl = await supabase.storage.from('gambar').getPublicUrl(`public/${profile.avatar}`);
      
      setCoverUrl(coverPublicUrl.data.publicUrl);
      setAvatarUrl(avatarPublicUrl.data.publicUrl);
    }

    init();
  }, [profile.cover, profile.avatar, router.query.email]);

  function setGambar(event) {
    const target = event.target;
    if (target && target.files) {
      setProfileGambar(target.files[0]);
    }
  }

  function setCover(event) {
    const target = event.target;
    if (target && target.files) {
      setProfileCover(target.files[0]);
    }
  }

  async function saveCover() {
    let filenamess;

    if (profileCover) {
      const { data, error } = await supabase.storage.from('cover').upload(
        `public/${uuidv4()}-${profileCover.name}`,
        profileCover,
        {
          cacheControl: '3600',
          upsert: false,
        }
      );

      if (data) {
        filenamess = data.Key;
      }
    }

    if (profile.id) {
      const { error } = await supabase
        .from('Profiles')
        .update({ cover: filenamess })
        .eq('email', profile.email);
    } else {
      const { error } = await supabase.from('Profiles').insert({
        cover: filenamess,
      });
    }

    // Fetch updated coverUrl and update the state
    const coverPublicUrl = await supabase.storage.from('cover').getPublicUrl(`public/${filenamess}`);
    setCoverUrl(coverPublicUrl.data.publicUrl);
  }

  async function saveProfile() {
    let filename;
    let filenames;

    // Your existing saveProfile function code here

    // Fetch updated coverUrl and avatarUrl and update the state
    const coverPublicUrl = await supabase.storage.from('cover').getPublicUrl(`public/${filenames}`);
    const avatarPublicUrl = await supabase.storage.from('gambar').getPublicUrl(`public/${filename}`);
    
    setCoverUrl(coverPublicUrl.data.publicUrl);
    setAvatarUrl(avatarPublicUrl.data.publicUrl);
  }

  return (
    <div>
      {/* Your JSX structure here */}
    </div>
  );
}
