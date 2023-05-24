import React, { useEffect, useState } from 'react';
import PostUserComment from './PostUserComment';
import PostComment from './PostComment';
import PostCarousel from './PostCarousel';
import { Button } from 'flowbite-react';
import ImageModal from '../Modals/ImageModal';

export default function MainPost({ images, writer, description, comments }) {
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [image, setImage] = useState(null);
  const [imgShow, setImgShow] = useState(false);

  useEffect(() => {
    if (!imgShow) document.body.style.overflow = 'auto'; // 스크롤바 보이도록 설정
  }, [imgShow]);

  const onImageHandler = (e) => {
    setImage(e.target.src);
    setImgShow(true);
  };

  return (
    <div className="flex-col rounded-lg h-full font-suiteMedium">
      <PostCarousel images={images} onImageHandler={onImageHandler} />
      <ImageModal img={image} imgShow={imgShow} onClose={() => setImgShow(false)} />
      <div>
        <div className="grid grid-cols-2 border rounded-t-lg p-4">
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full shadow-lg mr-3" src={writer.src} alt="" />
            <h1 className="font-suiteBold text-lg">{writer.id}</h1>
          </div>
          <div className="flex justify-end">
            <Button className="transition ease-in">팔로우</Button>
          </div>
        </div>
        <div className="overflow-y-scroll border-l border-r border-b text-sm">
          <p className="mt-2 p-4">{description}</p>
          <div className="text-gray-600 font-suiteMedium text-sm p-3"># 태그 1</div>
          <div className="font-suiteBold text-sm p-3">좋아요 60개</div>
          <div className="grid grid-cols-2 p-3">
            <div>
              <button
                onClick={() => {
                  setLike(!like);
                }}
                className="mr-2"
              >
                {!like ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-red-500 duration-300 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="fill-red-500 duration-300 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  setBookMark(!bookMark);
                }}
              >
                {!bookMark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-blue-500 duration-300 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="fill-blue-500 duration-300 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="font-suiteMedium text-right mr-3">2023-05-17</div>
          </div>
        </div>
        <div className="border-r border-l">
          {comments.length ? (
            <h1 className="p-4 font-suiteBold">댓글 {comments.length}개</h1>
          ) : (
            <h1 className="p-4 font-suiteBold">작성된 댓글이 없습니다</h1>
          )}
        </div>
        <PostUserComment className="p-4" />
        <div className="flex-col rounded-b-lg border-l border-r border-b max-h-96 overflow-y-scroll">
          {comments.map((data) => {
            return <PostComment comment={data} />;
          })}
        </div>
      </div>
    </div>
  );
}