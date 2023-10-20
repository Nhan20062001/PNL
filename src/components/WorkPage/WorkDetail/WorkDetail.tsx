import React from 'react';
import styles from './style.module.scss';
import { Image } from 'antd';

function WorkDetail() {
  return (
    <div className={styles['work-detail']}>
      <h4>Tên dự án</h4>
      <div className={styles['body-work-detail']}>
        <Image
          className={styles['image-work-detail']}
          src="https://s3-alpha-sig.figma.com/img/47b5/9f1e/e2bd9eb62e9c44a80536c27ae621f754?Expires=1698624000&Signature=fd8JO9aOkSEhuZ0h77UPrMwJFiU2bCJDTDal21QQTs7awafGj3KnNAKEagv9STwNlMcEzd3wdYBX91EnHOt0SVthwoum4285KGpSR~dL19oAOZYf1T9ftg8SIZ78bp~idKXhEP5zSUca7EcEs77CSL~2EqSizOi~yR7-rhWRoXm6VcEy~1QuscnxR7EsieB5jRan-MexT8gocQOC8wMzwDzJN9xTY1BjFxya4gDigsdrzfAPySfbB4uDZq9x3IzqjMFGQu-tUAg4CjUEsRsVWfvrJMUsjtU0SrK5GCwpTgOMsYRyogZ-9aS8dTNk9nl~jqXRXELuMrOMOST~hkQTwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          preview={false}
        />
        <h5 className={styles['text-description']}>
          here are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don here
          are many variations of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which don here are many
          variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don here are many variations
          of passages of Lorem Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don here are many variations of
          passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
          by injected humour, or randomised words which don here are many variations of passages of
          Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don here are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by injected humour, or
          randomised words which don here are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour, or randomised
          words which don here are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or randomised words
          which don here are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words which don
        </h5>
      </div>
    </div>
  );
}

export default WorkDetail;
