import { useQuery } from '@apollo/client';
import { HelloDocument } from 'graphql/generated.graphql';
type Props = {
  posts: {
    id: string;
    title: string;
  }[];
};

function FrontQuery() {
  const { loading, error, data } = useQuery(HelloDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <ul>hello</ul>;
}

export default FrontQuery;
