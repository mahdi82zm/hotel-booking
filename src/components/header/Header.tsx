"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LucideSearch } from "lucide-react";
import { cn } from "cn";
import { Combobox, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList } from "../ui/combobox";
import { ComboboxInput } from "@base-ui/react";



const cities = [
  { code: "", value: "", label: "انتخاب شهر", province: "" },

  // تهران
  { code: "tehran", value: "tehran", label: "تهران", province: "تهران" },
  { code: "eslamshahr", value: "eslamshahr", label: "اسلامشهر", province: "تهران" },
  { code: "shemiranat", value: "shemiranat", label: "شمیرانات", province: "تهران" },
  { code: "varamin", value: "varamin", label: "ورامین", province: "تهران" },

  // خراسان رضوی
  { code: "mashhad", value: "mashhad", label: "مشهد", province: "خراسان رضوی" },
  { code: "neyshabur", value: "neyshabur", label: "نیشابور", province: "خراسان رضوی" },
  { code: "sabzevar", value: "sabzevar", label: "سبزوار", province: "خراسان رضوی" },
  { code: "torbat-heydariyeh", value: "torbat-heydariyeh", label: "تربت حیدریه", province: "خراسان رضوی" },

  // اصفهان
  { code: "isfahan", value: "isfahan", label: "اصفهان", province: "اصفهان" },
  { code: "kashan", value: "kashan", label: "کاشان", province: "اصفهان" },
  { code: "najafabad", value: "najafabad", label: "نجف‌آباد", province: "اصفهان" },
  { code: "shahreza", value: "shahreza", label: "شهرضا", province: "اصفهان" },

  // فارس
  { code: "shiraz", value: "shiraz", label: "شیراز", province: "فارس" },
  { code: "marvdasht", value: "marvdasht", label: "مرودشت", province: "فارس" },
  { code: "jahrom", value: "jahrom", label: "جهرم", province: "فارس" },
  { code: "fasa", value: "fasa", label: "فسا", province: "فارس" },

  // خوزستان
  { code: "ahvaz", value: "ahvaz", label: "اهواز", province: "خوزستان" },
  { code: "dezful", value: "dezful", label: "دزفول", province: "خوزستان" },
  { code: "abad an", value: "abadan", label: "آبادان", province: "خوزستان" },
  { code: "khorramshahr", value: "khorramshahr", label: "خرمشهر", province: "خوزستان" },

  // آذربایجان شرقی
  { code: "tabriz", value: "tabriz", label: "تبریز", province: "آذربایجان شرقی" },
  { code: "maragheh", value: "maragheh", label: "مراغه", province: "آذربایجان شرقی" },
  { code: "marand", value: "marand", label: "مرند", province: "آذربایجان شرقی" },

  // آذربایجان غربی
  { code: "urmia", value: "urmia", label: "ارومیه", province: "آذربایجان غربی" },
  { code: "khoy", value: "khoy", label: "خوی", province: "آذربایجان غربی" },
  { code: "mahabad", value: "mahabad", label: "مهاباد", province: "آذربایجان غربی" },

  // گیلان
  { code: "rasht", value: "rasht", label: "رشت", province: "گیلان" },
  { code: "anzali", value: "anzali", label: "بندر انزلی", province: "گیلان" },
  { code: "lahijan", value: "lahijan", label: "لاهیجان", province: "گیلان" },
  { code: "talesh", value: "talesh", label: "تالش", province: "گیلان" },

  // مازندران
  { code: "sari", value: "sari", label: "ساری", province: "مازندران" },
  { code: "amol", value: "amol", label: "آمل", province: "مازندران" },
  { code: "babol", value: "babol", label: "بابل", province: "مازندران" },
  { code: "chalus", value: "chalus", label: "چالوس", province: "مازندران" },
  { code: "ramsar", value: "ramsar", label: "رامسر", province: "مازندران" },

  // البرز
  { code: "karaj", value: "karaj", label: "کرج", province: "البرز" },
  { code: "hashtgerd", value: "hashtgerd", label: "هشتگرد", province: "البرز" },

  // کرمان
  { code: "kerman", value: "kerman", label: "کرمان", province: "کرمان" },
  { code: "sirjan", value: "sirjan", label: "سیرجان", province: "کرمان" },
  { code: "bam", value: "bam", label: "بم", province: "کرمان" },

  // هرمزگان
  { code: "bandar-abbas", value: "bandar-abbas", label: "بندرعباس", province: "هرمزگان" },
  { code: "kish", value: "kish", label: "کیش", province: "هرمزگان" },
  { code: "qeshm", value: "qeshm", label: "قشم", province: "هرمزگان" },
  { code: "minab", value: "minab", label: "میناب", province: "هرمزگان" },

  // بوشهر
  { code: "bushehr", value: "bushehr", label: "بوشهر", province: "بوشهر" },
  { code: "borazjan", value: "borazjan", label: "برازجان", province: "بوشهر" },

  // یزد
  { code: "yazd", value: "yazd", label: "یزد", province: "یزد" },
  { code: "meybod", value: "meybod", label: "میبد", province: "یزد" },

  // کرمانشاه
  { code: "kermanshah", value: "kermanshah", label: "کرمانشاه", province: "کرمانشاه" },
  { code: "javanrud", value: "javanrud", label: "جوانرود", province: "کرمانشاه" },

  // کردستان
  { code: "sanandaj", value: "sanandaj", label: "سنندج", province: "کردستان" },
  { code: "saqqez", value: "saqqez", label: "سقز", province: "کردستان" },
  { code: "marivan", value: "marivan", label: "مریوان", province: "کردستان" },

  // همدان
  { code: "hamedan", value: "hamedan", label: "همدان", province: "همدان" },
  { code: "malayer", value: "malayer", label: "ملایر", province: "همدان" },

  // مرکزی
  { code: "arak", value: "arak", label: "اراک", province: "مرکزی" },
  { code: "saveh", value: "saveh", label: "ساوه", province: "مرکزی" },

  // قم
  { code: "qom", value: "qom", label: "قم", province: "قم" },

  // قزوین
  { code: "qazvin", value: "qazvin", label: "قزوین", province: "قزوین" },

  // زنجان
  { code: "zanjan", value: "zanjan", label: "زنجان", province: "زنجان" },

  // اردبیل
  { code: "ardabil", value: "ardabil", label: "اردبیل", province: "اردبیل" },

  // گلستان
  { code: "gorgan", value: "gorgan", label: "گرگان", province: "گلستان" },
  { code: "gonbad-kavus", value: "gonbad-kavus", label: "گنبد کاووس", province: "گلستان" },

  // سمنان
  { code: "semnan", value: "semnan", label: "سمنان", province: "سمنان" },
  { code: "shahroud", value: "shahroud", label: "شاهرود", province: "سمنان" },

  // سیستان و بلوچستان
  { code: "zahedan", value: "zahedan", label: "زاهدان", province: "سیستان و بلوچستان" },
  { code: "chabahar", value: "chabahar", label: "چابهار", province: "سیستان و بلوچستان" },
  { code: "zabol", value: "zabol", label: "زابل", province: "سیستان و بلوچستان" },

  // خراسان جنوبی
  { code: "birjand", value: "birjand", label: "بیرجند", province: "خراسان جنوبی" },
  { code: "tabas", value: "tabas", label: "طبس", province: "خراسان جنوبی" },

  // خراسان شمالی
  { code: "bojnurd", value: "bojnurd", label: "بجنورد", province: "خراسان شمالی" },
  { code: "shirevan", value: "shirevan", label: "شیروان", province: "خراسان شمالی" },

  // لرستان
  { code: "khorramabad", value: "khorramabad", label: "خرم‌آباد", province: "لرستان" },
  { code: "borujerd", value: "borujerd", label: "بروجرد", province: "لرستان" },

  // ایلام
  { code: "ilam", value: "ilam", label: "ایلام", province: "ایلام" },

  // چهارمحال و بختیاری
  { code: "shahrekord", value: "shahrekord", label: "شهرکرد", province: "چهارمحال و بختیاری" },
  { code: "lordegan", value: "lordegan", label: "لردگان", province: "چهارمحال و بختیاری" },

  // کهگیلویه و بویراحمد
  { code: "yasuj", value: "yasuj", label: "یاسوج", province: "کهگیلویه و بویراحمد" },
  { code: "dogonbadan", value: "dogonbadan", label: "دوگنبدان", province: "کهگیلویه و بویراحمد" },

  // خوزستان و دیگر مراکز مهم
  { code: "masjed-soleyman", value: "masjed-soleyman", label: "مسجدسلیمان", province: "خوزستان" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-2 py-4 rounded-xl w-full h-full border border-white/20 shadow-sm bg-white/60 backdrop-blur-xl">

      {/* top section */}
      <div className="grid grid-cols-8 items-center justify-between w-full">
        <div className="col-span-2">

          <Button variant={"outline"} >ورود | ثبت نام </Button>
        </div>
        <nav className="flex items-center justify-center gap-4 h-16 text-xl col-span-4 ">
          <Link
            href={"/Home"}
            className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
          >
            پشتیبانی
          </Link>
          <Link
            href={"/Home"}
            className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
          >
            سوالات متداول        </Link>
          <Link
            href={"/Home"}
            className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
          >
            درباره ما
          </Link>
          <Link
            href={"/Home"}
            className="text-gray-700 hover:border-b-2 hover:border-b-blue-500"
          >
            تماس با ما
          </Link>
        </nav>
        <div className="absolute col-span-1 aspect-square w-12 flex right-5
         ">

          <Image src={"../logo.svg"} alt="logo" fill className=" relative" />
        </div>

      </div>
      {/* search section */}
      <div className={cn(" flex items-center justify-center w-full  ")}>
        <div className="flex items-center h-20 justify-between p-3 w-1/2 rounded-full border-2 border-zinc-200 gap-4 ">
          <div className="rounded-full   flex items-center justify-center">
            <Button variant={"default"} className={"bg-cyan-500 rounded-full "}   >

              <LucideSearch className="aspect-square size-5" />
            </Button>
          </div>
          <div className="border-r-2 p-2  ">
            <p>تعداد نفرات</p>
            <span>2 نفر بزرگسال 1 نفر کودک</span>
          </div>
          <div>
            <p>تاریخ ورود و خروج</p>
            <span>انتخاب  کنید</span></div>
          <Button variant={"secondary"} >
            <Combobox items={cities.filter((city) => city.code !== "")}
              itemToStringValue={(city: (typeof cities)[number]) => city.label}
            >
              <ComboboxChipsInput placeholder="جستجوی شهر یا استان" />
              <ComboboxContent>
                <ComboboxEmpty>چیزی پیدا نشد !</ComboboxEmpty>
                <ComboboxList>
                  {(city) => (
                    <ComboboxItem key={city.code} value={city}>
                      {city.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>

          </Button >
        </div>

      </div>

    </header>
  );
}
