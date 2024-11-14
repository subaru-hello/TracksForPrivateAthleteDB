import * as functions from 'firebase-functions';
import * as dotenv from 'dotenv';

dotenv.config();
// 環境変数を取得する関数
export function getEnvVariable(key: string): string {
  // 本番環境ではFirebase Configから取得
  if (process.env.NODE_ENV === 'production') {
    return functions.config().env[key.toLowerCase()];
  }
  // ローカル環境では.envから取得
  return process.env[key] ?? '';
}
