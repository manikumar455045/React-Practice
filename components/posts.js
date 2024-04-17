import React, { useEffect, useState } from "react";

const Posts = () => {
    async function pageContent(num) {
        const res = [];
        for (let i = 0; i < num; i++) {
          res.push({
            item: i,
            page: num,
          });
        }
      
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        return res;
      }

      const [sentence, setSentence] = useState([]);
      const [num, setNum] = useState(1);
      useEffect(() => {
        pageContent(num).then((data) => {
            setSentence([...sentence, ...data]);
        });
      }, [num]);
      console.log('sen', sentence);

      const handleAddMore = () => {
        setNum(num + 1);
      }
    return (
        <><ul>
            {
                sentence.length > 0 && sentence.map(i => (
                    <li>{i.item}</li>
                ))
            }
            </ul>
            <button onClick={handleAddMore}>Load More</button>
            </>
    )
}

export default Posts;