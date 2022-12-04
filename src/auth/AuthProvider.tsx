import firebase from 'firebase/app';
import { createContext, useEffect, useState, ReactNode } from 'react';
import { auth } from 'Firebase';
import { User } from 'firebase/auth';
import Loading from 'components/organisms/global/Loading';

type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  const [signInCheck, setSignInCheck] = useState(false);

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(true);
      }
    });
  });

  if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    // ログイン確認中
    // 自分で作ったローディングコンポーネントをレンダリングする
    return <Loading />;
  }
};

export { AuthContext, AuthProvider };
