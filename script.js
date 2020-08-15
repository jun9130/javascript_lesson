//if文
if (true) {
  console.log('trueなので実行される')
}

const country = "アメリカ"
switch (country) {
  case "日本":
    document.write("日本です");
    break; //break文でswitch文から抜ける
  case "イタリア":
    document.write("イタリアです");
    break;
  case "アメリカ":
    document.write("アメリカです");
    break;
  default:
    document.write("日本でもイタリアでもアメリカでもありません。");
    break;
}

