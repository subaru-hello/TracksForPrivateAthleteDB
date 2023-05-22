import { useQuery } from '@apollo/client';
import { HelloDocument } from 'graphql/generated.graphql';
type IPost = {
  id: string;
  title: string;
};

function FrontQuery() {
  const { loading, error, data } = useQuery(HelloDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ul>
      {data.GetHello.map((gh: IPost) => (
        <li key={gh.id}>{gh.title}</li>
      ))}
    </ul>
  );
}

export default FrontQuery;
