import './index.css';
import React from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

// Movie informations
// Includes the storyline, pictures, and genre

const globalState = {
  movies: [
    {
      id: 0,
      image: 'https://res.heraldm.com/content/image/2024/03/19/20240319050599_0.jpg',
      Title: 'EXHUMA (2024)',
      Genre: 'Horror, Thriller & Mystery',
      Synopsis: 'When a renowned shaman (KIM Go-Eun) and her protégé (Lee Do-hyun) are hired by a wealthy, enigmatic family, they begin investigating the cause of a disturbing supernatural illness that affects only the first-born children of each generation. With the help of a knowledgeable mortician (YOO Hai-jin) and the country’s most revered geomancer (CHOI Min-sik), they soon trace the affliction’s origin to a long-hidden family grave located on sacred ground. Sensing an ominous aura surrounding the burial site, the team opts to exhume and relocate the ancestral remains immediately. But as something much darker emerges, they soon discover what befalls those who dare to mess with the wrong grave.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },
    
    {
      id: 1,
      image: 'https://cdn.webshopapp.com/shops/287573/files/336023113/1652x2313x1/moth-and-rabbit-parasite-eau-de-parfum.jpg',
      Title: 'Parasite (2019)',
      Genre: 'Comedy / Mystery & Thriller',
      Synopsis: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', 
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },

    {
      id: 2,
      image: 'https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      Title: 'The Handmaiden (2016)',
      Genre: 'Drama, Romance, Thriller',
      Synopsis: 'A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },

      {      
        id: 3,
        image: 'https://image.tmdb.org/t/p/original/l3exwhwyGE0NnHJ3lFQ7eXoBSkH.jpg',
        Title: 'A Tale of Two Sisters (2003)',
        Genre: 'Horror, Thriller & Mystery',
        Synopsis: 'After being institutionalized in a mental hospital, Korean teen Su-mi (Yum Jung-ah) reunites with her beloved sister, Su-yeon (Im Soo-jung), and they return to live at their country home. The girls widower father (Moon Geun-young) has remarried, and the siblings are immediately resentful of his new wife, Eun-joo (Kim Kap-soo). As Su-mi and Su-yeon try to resume their regular lives, strange events plague the house, leading to surprising revelations and a shocking conclusion.',
        totalVotes: 0,
        sumVotes: 0,
        averageRating: 0,
  
    },

    {
      id: 4,
      image: 'https://m.media-amazon.com/images/M/MV5BMjgwNmViZDktYzNhYi00MjM1LWFkMTMtMTgzMDMyZWVmM2YxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
      Title: 'The Beauty Insid (2015)',
      Genre: 'Romance, Comedy',
      Synopsis: 'Woo-jin wakes up in a different body everyday, regardless of age, gender and nationality. Sometimes he is a man, a woman, old, young, or even a foreigner. He is the same person on the inside, but on the outside he is always someone new. Looking at a different face in the mirror every morning is hard for him to get used to. The only constant in his life is the girl he loves, Yi-soo, who knows his secret and loves him anyway. Each time he transforms, Woo-jin must figure out how to reunite with Yi-soo.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },
  ],
};

function App() {
  return (
    <div className="App">
      <body id='color'>
        <span>
        <MovieList globalState={globalState}/>
        </span>
      </body>
    </div>
  );
}

export default App;