import React, { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import {SearchContext} from '@/components/context/searchContext';

export default function BlogSearch(){
  const { search, setSearch } = useContext(SearchContext);
  const router = useRouter();

  const handleChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.currentTarget;
      setSearch(value);
    },
    [setSearch],
  );

  const handleClickSearchButton = useCallback(() => {
    void router.push(`/blog/search?keyword=${search}`);
  }, [search, router]);

  return(
    <>
      <div className="p-1 mt-4 mb-4">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> 記事の検索 </h5>
        <p className="text-gray-600">
          検索したいワードを入力してください
        </p>
        <input placeholder="検索したいワードを入力"
          className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" 
          onChange={handleChangeKeyword}
          value={search}
          />
        <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide" onClick={handleClickSearchButton}>
          検索
        </button>
      </div>
    </>
  );
}