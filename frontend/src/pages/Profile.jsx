import * as React from 'react';
import { H1, ParagraphSmall } from 'baseui/typography';

const Profile = ({ user }) => {
  return (
    <section>
      <H1>Hello, {user.username}</H1>
      <ParagraphSmall>
        <pre id="json" style={{ overflowX: "auto" }}>
          {
            JSON.stringify(user, null, 2)
          }
        </pre>
      </ParagraphSmall>
    </section>
  );
}

export default Profile;