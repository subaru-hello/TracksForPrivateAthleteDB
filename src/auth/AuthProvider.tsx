import { createContext, useEffect, useState, ReactNode, Suspense } from 'react';
import { User } from 'firebase/auth';
import { auth } from 'Firebase';
import Loading from 'components/organisms/global/Loading';
import { getCurrentUser } from 'apis/firebase/users';
import { DocumentData } from 'firebase-admin/firestore';

type AuthContextProps = {
  currentUser: User | null | undefined;
  isLoggedIn: boolean;
  profile: DocumentData | undefined;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  isLoggedIn: false,
  profile: undefined,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [profile, setProfile] = useState<DocumentData | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // profileを更新
        const userSnapShot = await getCurrentUser(user.email);
        const userInfo = !userSnapShot.empty
          ? userSnapShot.docs[0].data()
          : null;
        setProfile({ ...userInfo, uid: userSnapShot.docs[0]?.id });
        setCurrentUser(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    // ログイン確認中
    // 自分で作ったローディングコンポーネントをレンダリングする
    // TODO: 個別コンポーネントでSuspenseさせた方がpartial renderingできるならそうする
    <Suspense fallback={<Loading />}>
      <AuthContext.Provider value={{ currentUser, profile, isLoggedIn }}>
        {children}
      </AuthContext.Provider>
    </Suspense>
  );
};

export { AuthContext, AuthProvider };
