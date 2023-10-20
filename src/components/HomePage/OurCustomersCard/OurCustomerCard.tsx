import { useRef } from 'react';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';

const OurCustomersPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: '100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' },
    transition: { duration: 1 },
  };
  return (
    <div className="container">
      <div ref={ref} className={styles['our-customers']}>
        <div className={styles['our-customers-header']}>
          <h3>Our Customers</h3>
          <div className={styles['rectangle']}>
            <motion.div {...motionSetting} className={styles['rectangle-top']}></motion.div>
            <motion.div {...motionSetting} className={styles['rectangle-bottom']}></motion.div>
          </div>
        </div>

        <div className={styles['our-customers-main']}>
          <div className={styles['logo-customers']}>
            <img
              src="https://s3-alpha-sig.figma.com/img/590b/1056/044b33e97ef3509555c13284864151c5?Expires=1698019200&Signature=FlYEd9QiPdk4G~tusQoHsQvpluzaj6I1tBixSjToHj7BKpe19wG52Do7c2RI2-JPrmV-PoE3TqIfBLd0x6jGRCR27YucRKZjepITtFWCeCXrv-kAje5PF7yKeoEqmLlRaMy3a08NJ979DCE7D0lv0IrY34UnFG-C0R-CsvjX-m4ziz2euX0BIJ~kHFu866VFL7LeyYQ8N8egVuwx9Pt6INrVpxmhE0qwHWn66tsHoojDUlmuzHRILrYpRGeA462oc4NMgn-5PbGFjpMS963zxCJoF7pn-iJBh0uX89zX07TmYxQVXZr2ilVmAg6JKsw0JfQcQ846xHMVSAp4Qni~mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            ></img>
            <img
              src="https://s3-alpha-sig.figma.com/img/590b/1056/044b33e97ef3509555c13284864151c5?Expires=1698019200&Signature=FlYEd9QiPdk4G~tusQoHsQvpluzaj6I1tBixSjToHj7BKpe19wG52Do7c2RI2-JPrmV-PoE3TqIfBLd0x6jGRCR27YucRKZjepITtFWCeCXrv-kAje5PF7yKeoEqmLlRaMy3a08NJ979DCE7D0lv0IrY34UnFG-C0R-CsvjX-m4ziz2euX0BIJ~kHFu866VFL7LeyYQ8N8egVuwx9Pt6INrVpxmhE0qwHWn66tsHoojDUlmuzHRILrYpRGeA462oc4NMgn-5PbGFjpMS963zxCJoF7pn-iJBh0uX89zX07TmYxQVXZr2ilVmAg6JKsw0JfQcQ846xHMVSAp4Qni~mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            ></img>
            <img
              src="https://s3-alpha-sig.figma.com/img/590b/1056/044b33e97ef3509555c13284864151c5?Expires=1698019200&Signature=FlYEd9QiPdk4G~tusQoHsQvpluzaj6I1tBixSjToHj7BKpe19wG52Do7c2RI2-JPrmV-PoE3TqIfBLd0x6jGRCR27YucRKZjepITtFWCeCXrv-kAje5PF7yKeoEqmLlRaMy3a08NJ979DCE7D0lv0IrY34UnFG-C0R-CsvjX-m4ziz2euX0BIJ~kHFu866VFL7LeyYQ8N8egVuwx9Pt6INrVpxmhE0qwHWn66tsHoojDUlmuzHRILrYpRGeA462oc4NMgn-5PbGFjpMS963zxCJoF7pn-iJBh0uX89zX07TmYxQVXZr2ilVmAg6JKsw0JfQcQ846xHMVSAp4Qni~mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            ></img>
            <img
              src="https://s3-alpha-sig.figma.com/img/590b/1056/044b33e97ef3509555c13284864151c5?Expires=1698019200&Signature=FlYEd9QiPdk4G~tusQoHsQvpluzaj6I1tBixSjToHj7BKpe19wG52Do7c2RI2-JPrmV-PoE3TqIfBLd0x6jGRCR27YucRKZjepITtFWCeCXrv-kAje5PF7yKeoEqmLlRaMy3a08NJ979DCE7D0lv0IrY34UnFG-C0R-CsvjX-m4ziz2euX0BIJ~kHFu866VFL7LeyYQ8N8egVuwx9Pt6INrVpxmhE0qwHWn66tsHoojDUlmuzHRILrYpRGeA462oc4NMgn-5PbGFjpMS963zxCJoF7pn-iJBh0uX89zX07TmYxQVXZr2ilVmAg6JKsw0JfQcQ846xHMVSAp4Qni~mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            ></img>
            <img
              src="https://s3-alpha-sig.figma.com/img/590b/1056/044b33e97ef3509555c13284864151c5?Expires=1698019200&Signature=FlYEd9QiPdk4G~tusQoHsQvpluzaj6I1tBixSjToHj7BKpe19wG52Do7c2RI2-JPrmV-PoE3TqIfBLd0x6jGRCR27YucRKZjepITtFWCeCXrv-kAje5PF7yKeoEqmLlRaMy3a08NJ979DCE7D0lv0IrY34UnFG-C0R-CsvjX-m4ziz2euX0BIJ~kHFu866VFL7LeyYQ8N8egVuwx9Pt6INrVpxmhE0qwHWn66tsHoojDUlmuzHRILrYpRGeA462oc4NMgn-5PbGFjpMS963zxCJoF7pn-iJBh0uX89zX07TmYxQVXZr2ilVmAg6JKsw0JfQcQ846xHMVSAp4Qni~mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurCustomersPage;
