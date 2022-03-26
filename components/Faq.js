import React from 'react';
import styles from '../styles/Faq.module.scss';
const Faq = () => {
  return (
    <div className={styles.faqBody}>
      <div className={styles.faq}>
        {/* <HeaderSection>{'TEXT'}</HeaderSection> */}
        <div className={styles.tab}>
          <input type="checkbox" id="tab1" className={styles.tabToggle} /> <label
            htmlFor="tab1"
            className={styles.tabLabel}
          >
            What do I do?
          </label>
          <div className={styles.tabContent}>
            Front-end developement. Mostly with React, have over two years of experince. Have a year of React-native experince.
          </div>
        </div>
        <div className="tab">
          <input type="checkbox" id="tab2" className={styles.tabToggle} /> <label
            htmlFor="tab2"
            className={styles.tabLabel}
          >
            What do I want to work on?{' '}
          </label>
          <div className={styles.tabContent}>
            Everything... but I can't. I have been working with website builders I am starting to WordPress but I have more experince with Shopify. Which is cool but I also enjoy doing the hard work of starting from scratch.
          </div>
        </div>
        <div className="tab">
          <input type="checkbox" id="tab3" className={styles.tabToggle} />
          {' '}
          <label htmlFor="tab3" className={styles.tabLabel}>Troubleshooting?</label>
          <div className={styles.tabContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis error distinctio
            aspernatur commodi, non cumque, quisquam quae, labore maiores velit provident sunt beatae nam eos ullam odit
            rerum. Nesciunt, quod?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis error distinctio
            aspernatur commodi, non cumque, quisquam quae, labore maiores velit provident sunt beatae nam eos ullam odit
            rerum. Nesciunt, quod?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis error distinctio
            aspernatur commodi, non cumque, quisquam quae, labore maiores velit provident sunt beatae nam eos ullam odit
            rerum. Nesciunt, quod?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
