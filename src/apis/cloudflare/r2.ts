import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// R2はS3互換なためS3クライアントでR2と接続させている（仕様）
const R2 = new S3Client({
  endpoint: import.meta.env.VITE_FIREBASE_R2_ENDPOINT,
  credentials: {
    accessKeyId: import.meta.env.VITE_FIREBASE_R2_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_FIREBASE_R2_SECRET_ACCESS_KEY,
  },
  region: 'auto',
});

// 署名付きURLを使ってその人しかアップロードできないようにした
export const putPresignedUrl = async (
  bucket: string,
  key: string,
  body: File
) =>
  await getSignedUrl(
    R2,
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
    }),
    {
      expiresIn: 60 * 60 * 24 * 1, // 1d
    }
  );
