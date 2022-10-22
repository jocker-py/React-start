import React from 'react';
import cl from './loader.module.css';

const Loader = () => {
  return (
    <div className={cl.loader}>
      <span className={cl.loader__item} style={{ animationDelay: `0s` }}>
        L
      </span>
      <span className={cl.loader__item} style={{ animationDelay: `0.2s` }}>
        o
      </span>
      <span className={cl.loader__item} style={{ animationDelay: `0.4s` }}>
        a
      </span>
      <span className={cl.loader__item} style={{ animationDelay: `0.6s` }}>
        d
      </span>
      <span className={cl.loader__item} style={{ animationDelay: `0.8s` }}>
        i
      </span>
      <span className={cl.loader__item} style={{ animationDelay: `1s` }}>
        n
      </span>
      <span className={cl.loader__item} style={{ animationDelay: `1.2s` }}>
        g
      </span>
    </div>
  );
};

export default Loader;
