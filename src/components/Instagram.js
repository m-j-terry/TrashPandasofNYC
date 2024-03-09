export default function Instagram(){
    function openInstagramPost() {
        var url = "https://www.instagram.com/p/xxxxx/";
        var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        window.open(url, "_blank", windowFeatures);
    }
    let link = 'https://www.instagram.com/p/CdraSwuM-Lw/?utm_source=ig_embed&amp;utm_campaign=loading'
    return(
        <div className="InstagramComponent">
            <blockquote className="media" data-instgrm-captioned data-instgrm-permalink={link} data-instgrm-version="13"></blockquote>
            <button onClick={() => { openInstagramPost() }}>Open Instagram Post</button>
        </div>
    )
}