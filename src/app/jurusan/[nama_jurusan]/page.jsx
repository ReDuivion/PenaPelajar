'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../config/supabase';
import { Suspense } from 'react';

const JurusanDetail = () => {
  const { nama_jurusan } = useParams();
  const [jurusan, setJurusan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJurusan = async () => {
      try {
        const { data, error } = await supabase
          .from('jurusan')
          .select('id, nama_jurusan, detail')
          .eq('nama_jurusan', nama_jurusan)
          .single();
      
        if (error) {
          throw error;
        }
      

        setJurusan(data);
        setIsLoading(false);
        document.title = `JURUSAN ${data.nama_jurusan}`;
      } catch (error) {
        console.error('Error fetching jurusan:', error);
        setIsLoading(false);
      }
    };

    if (nama_jurusan) {
      fetchJurusan();
    }
  }, [nama_jurusan]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Suspense fallback={<p>Loading Page</p>}>
    <div>

      <h1>Selamat datang di JURUSAN {jurusan?.nama_jurusan}</h1>
    </div>
    <h1>{jurusan?.detail}</h1>
      </Suspense>
    </>
  );
};

export default JurusanDetail;
