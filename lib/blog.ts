// Example content for demonstration
export const exampleContent = `
<p>Kel Kartal (<em>Haliaeetus leucocephalus</em>), Kuzey Amerika'da gücün ve özgürlüğün kalıcı bir sembolü olarak duruyor. Beyaz başı, koyu kahverengi gövdesi ve 2,3 metreye ulaşan kanat açıklığıyla, bu görkemli yırtıcı kuş görüldüğü her yerde dikkat çekiyor.</p>

<h2>Avlanma Teknikleri</h2>
<p>Kel Kartallar fırsatçı avcılardır ve avlarını yakalamak için çeşitli stratejiler kullanırlar. Avlanma süreçleri genellikle şunları içerir:</p>
<ul>
  <li>Potansiyel avı görmek için 3.000 metre yüksekliğe kadar süzülme</li>
  <li>Su yüzeyine yakın balıkları yakalamak için saatte 160 km hıza ulaşan dalışlar</li>
  <li>Hem sudan hem de karadan avlarını yakalamak için güçlü pençelerini kullanma</li>
</ul>

<h2>Yuvalama Alışkanlıkları</h2>
<p>Bu muhteşem kuşlar, Kuzey Amerika'daki herhangi bir kuşun en büyük yuvalarını inşa ederler. Yuvalama davranışlarının temel özellikleri şunlardır:</p>
<ul>
  <li>2,5 metre genişliğe ve 900 kg ağırlığa ulaşabilen yuvalar inşa etme</li>
  <li>Her sezon yeni malzemeler ekleyerek aynı yuva alanına yıl be yıl geri dönme</li>
  <li>Her iki ebeveynin de yuva yapımına ve bakımına katılması</li>
</ul>
`

export function getPostData(post: Post) {
  return {
    ...post,
    content: exampleContent,
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      role: "Yaban Hayatı Fotoğrafçısı"
    }
  }
}