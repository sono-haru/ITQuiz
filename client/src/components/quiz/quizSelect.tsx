import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type QuizSelectProps = {
  href: string;
  imgSrc: string;
  alt: string;
  text: string;
};

const QuizSelect: React.FC<QuizSelectProps> = ({ href, imgSrc, alt, text }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<'solo' | 'multi' | null>(null);
  const [nickname, setNickname] = useState('');
  const router = useRouter();

  const onImageClick = () => {
    setModalOpen(true);
  };

  const onModeSelect = (selectedMode: 'solo' | 'multi') => {
    setMode(selectedMode);
    if (selectedMode === 'solo') {
      // ソロならすぐページ遷移
      router.push(`./quiz/${href}`);
      setModalOpen(false);
      setMode(null);
    }
  };

  const onStartMulti = () => {
    if (nickname.trim() === '') {
      alert('ニックネームを入力してください');
      return;
    }
    // ここでnicknameをstateやContext, またはクエリに保存するのもあり
    // 今回はURLにクエリとして渡す例
    router.push({
      pathname: `./quiz/${href}`,
      query: { mode: 'multi', nickname },
    });
    setModalOpen(false);
    setMode(null);
    setNickname('');
  };

  const onCloseModal = () => {
    setModalOpen(false);
    setMode(null);
    setNickname('');
  };

  return (
    <div>

      <div
        onClick={onImageClick}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        <Image
          src={`/${imgSrc}.svg`}
          alt={alt}
          width={75}
          height={75}
          className="w-75 rounded-3xl border-2 border-gray-300 hover active"
          style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}
        />
        <small className="mt-4">{text}</small>
      </div>

      {/* モーダル表示 */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={onCloseModal}
        >
          <div className='relative bg-white rounded-3xl p-5 py-9 md:p-15'
               onClick={e => e.stopPropagation()} // モーダル外クリックで閉じるが、内側クリックは閉じない
          >
            {!mode && (
              <>
                <p className='text-[16px] md:text-base'>プレイモードを選択してください</p>
                <div className='flex justify-center gap-1 md:gap-5 mt-6'>

                  <button
                    onClick={() => onModeSelect('solo')}
                    className='text-sm md:text-base mr-10 bg-red-300 py-10 px-6 rounded-xl hover:cursor-pointer hover active'
                  >
                    ソロプレイ
                  </button>

                  <button onClick={() => onModeSelect('multi')}
                    className='text-sm md:text-base py-10 px-9 rounded-xl bg-green-300 hover:cursor-pointer hover active'
                    >
                      2人対戦
                  </button>

                </div>
                <button
                  onClick={onCloseModal}
                  className='text-sm md:text-base text-center mt-6 bg-blue-400 text-white py-2 px-4 rounded-xl hover:cursor-pointer hover active'
                >
                  キャンセル
                </button>
              </>
            )}

            {mode === 'multi' && (
              <>
                <h2>ニックネームを入力してください</h2>
                <input
                  type="text"
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  placeholder="ニックネーム"
                  className='mt-4 py-2 rounded-lg bg-gray-300 placeholder:text-sm placeholder:pl-4'
                  style={{ width: '100%', marginBottom: 10 }}
                />
                <button onClick={onStartMulti} className='mt-4 bg-red-300 py-2 px-6 rounded-lg hover:cursor-pointer hover active'>開始</button>
                <button
                  onClick={onCloseModal}
                  className='block mt-4 hover:cursor-pointer hover active'
                >
                  戻る
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSelect;
