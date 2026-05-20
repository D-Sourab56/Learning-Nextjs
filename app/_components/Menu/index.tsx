"use client";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";	// 追加
import cx from "classnames" ;

import styles from "./index.module.css";

export default function Menu() {
    const [isOpen, setOpen] = useState<boolean> (false);	// 追加
 const open = ()  => setOpen(true);
 const close = () => setOpen (false);


  return (
    <div>
    <nav className={cx(styles.nav, isOpen && styles.open) }>
      <ul className={styles.items}>
        <li>
          <Link href="/news">ニュース</Link>
        </li>
        <li>
          <Link href="/members">メンバー</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
      <button onClick={close} className={cx(styles.button, styles.close)}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>

    </nav>
      <button className={styles.button}  onClick={open}>
        <Image src="/menu.svg"alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
