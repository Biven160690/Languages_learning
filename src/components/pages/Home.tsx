import { Link } from 'react-router-dom';

import { useAuth } from '@hooks';

export function Home() {
  const auth = useAuth();
  return (
    <div>
      <h1>BrainStorm</h1>
      <main>
        Spaced repetition is a technique for scheduling when you should study
        material that you want to commit to memory. Flashcard apps like Fresh
        Cards use a spaced repetition algorithm to optimize your learning so
        that you don`t have to study everything every day. If you are studying a
        new language, you will need to memorize hundreds or thousands of new
        words, but it wouldon`t make sense to review hundreds of words every
        single day. At some point, your memory of a word is good enough and you
        don`t need to review it. However, given enough time without practice,
        your memory of the word would slowly disappear. Here`s where a spaced
        repetition algorithm comes in. After you learn a piece of information
        for the first time, your memory of that information will gradually decay
        until eventually it`s forgotten. A spaced repetition algorithm attempts
        to model that decay and predict when you are likely to forget. It then
        computes the optimum time in the future to review so that you can
        &quot;boost&quot; your memory again. After that &quot;boost&quot;, your
        memory will be good again. The good news is that each time you give your
        memory a boost, you strengthen it and the next review after that can be
        even further away in the future. Eventually, the periods between reviews
        would become so long that the fact would essentially become
        &quot;permanent&quot; in your memory.
        <p>
          A few words about this application! The following repetition algorithm
          is applied here - when you have learned a word, you press the
          &quot;learned&quot; button and the card will appear in your deck only
          after 6 days. When it seems to you that it is worth repeating a word,
          you click &quot;repeat&quot; and the card will appear the next day,
          and if you could not learn the word, then click on &quot;learn&quot;
          and the card will appear the next day in the same way. The interval of
          learned cards will increase every time.Good Luck!
        </p>
      </main>
      <p>
        {!auth.currentUser && (
          <strong>
            If you want to study, you need to <Link to='/singIn'>SingIn</Link>{' '}
            in or <Link to='/singUp'>SingUp</Link>
          </strong>
        )}
      </p>
    </div>
  );
}
