import { FC, SyntheticEvent } from 'react';
import {
  Image,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react';
import { AddCommentDoc } from 'apis/firebase/comments';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ShoesImages from 'components/ecosystems/shoes/ShoesImages';
import WithSpeechBubbles from '../global/TestimonialForTracks';

// Commentした人コンポーネント
interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack display="flex" alignItems="center">
      <Image
        // borderRadius="full"
        // boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

interface ITrackCommentList {
  title: string;
  body: string;
}

export const TrackCommentList: FC<ITrackCommentList> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text boxSize={10}>title</Text>
      <Box>{props.title}</Box>
      <Text boxSize={10}>body</Text>
      <Box>{props.body}</Box>
      <BlogAuthor name="subaru" date={new Date('2022-04-06T19:01:27Z')} />
    </HStack>
  );
};

interface IFirebaseProps {
  track_id: string;
  user_id: string;
}

const TrackCommentForm: FC<IFirebaseProps> = (props) => {
  console.log(window.location);
  const navigate = useNavigate();
  // あるユーザーがコメントを作成する
  const handleSubmitAddComment = async (
    event: SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: { value: string };
      body: { value: string };
    };
    AddCommentDoc(
      target.title.value,
      target.body.value,
      props.user_id,
      props.track_id
    )
      .then(() => {
        navigate(window.location.href);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'コメントを追加しました',
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // あるユーザーのコメントを削除する

  // あるユーザーのコメントを更新する

  return (
    <Box>
      <WithSpeechBubbles />
      <Heading>使用した感想を書こう</Heading>
      <form onSubmit={handleSubmitAddComment}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input name="title" type="text" placeholder="title" />
        </FormControl>
        <FormControl>
          <FormLabel>Body</FormLabel>
          <Input name="body" type="text" />
        </FormControl>
        <div>
          <ShoesImages />
        </div>

        <div>
          <Button type="submit">追加</Button>
        </div>
      </form>
    </Box>
  );
};

export default TrackCommentForm;
