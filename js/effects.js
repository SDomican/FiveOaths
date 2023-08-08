import spellJson from '../data/effectList.json' assert { type: 'json' };
var mq = window.matchMedia( "(max-width: 480px)" );

var isMobile = mq.matches;

function addSectionContainer(idToAmend){
  spellJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  let featsArray = featPath.feats;
  let pathName = featPath.pathName;
  let featPathColour = featPath.featPathColour;
  let sectionContainerId = "sectionContainer_" + pathName.split(" ").join("");

  let featCode = 
  "<div class=\"section-container\" id=\"" + sectionContainerId + "\" style=\"background-color: " + featPathColour + ";\" onclick=\"mobileExpand('" + sectionContainerId + "')\" >" + 
    "<div class=\"section-title\">" +
      "<span class=\"featPath-description-title-text\">" + pathName + "</span>" +
    "</div>" +
    "<div class=\"section-content\">" +
      "<div class=\"section-row\">";
      
      featsArray.forEach(feat => {

        let featName = feat.featName;
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = feat.description;
        let keywords = feat.magicSchool;
        let keywordsText = "";
        let call = feat.call;

        if(featName != "Effect priority" &&  featName != "Searching & IC Theft" &&  featName != "Restrained"){
          keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";

          for (let i = 0; i < keywords.length; i++) {
          
            if(i < (keywords.length - 1)){
              keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
            }
            else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
          }

          description = "<p><i id='popupMaterialCost'>Call: " + call + " </i></p>" + description;
        }

        let url = "./img/Effects/" + art + ".png";

        keywordsText + "</i>";

        description += keywordsText + "</p>";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" + 
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">Call: " + call + "</div>" +
            "</div>" +       
          "</div>";        
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

if(isMobile){
  featCode = featCode.replace(", eg “Evidence Destroyed!”", "");
  featCode = featCode.replace("<p id='hrId'> If a character with their finger in the air is performing an Action Call that is describing how they are appearing (eg “Crawling out of the ground 5! Crawling out of the ground 4!...”), they can not be attacked or interacted with until their Action Call has been completed. Once the character has finished their Action Call and lowered their finger, they can be interacted with as normal.</p>", "");
  featCode = featCode.replace("<p id='hrId'> E.g. If your character is hit with Rampage 30s, and 15 seconds into the duration of that they suffer the Lure Effect. Lure has priority as it is higher on the list for mental Effects than Rampage. Your character follows the Lure Effect’s directions for the next 10 seconds, before reverting to the Rampage Effect for the final 5 seconds of its duration.</p>","");
  featCode = featCode.replace(" For example: “Destroying the evidence 10! Destroying the evidence 9! Destroying the evidence 8!...”.","");
  featCode = featCode.replace("(eg “Crawling out of the ground 5! Crawling out of the ground 4!...”)","");
  featCode = featCode.replace("For example: “Destroying the evidence 10! Destroying the evidence 9! Destroying the evidence 8!...”.","");
  featCode = featCode.replace("Physical Effects priority", "Physical priority");
  featCode = featCode.replace("Mental Effects priority", "Mental priority");
  featCode = featCode.replace("<p>Most Immunities are reactive. What this means is that Feat or items will grant a character the ability to spend Vigour and become immune to an Effect when they are targeted with the Effect. If they spend the Vigour, the character declares “No Effect”, and gains the Immunity which lasts for a further short duration as specified by the Feat or item.</p>", "");
  featCode = featCode.replace("At no point should a player be out of character grappled or restrained. However there may be situations where a character needs to be restrained. To do so, you will need a phys rep of some kind, such as a ribbon or a sash.", "");
  featCode = featCode.replace(" For example, the character may add “…all around me” or simply “Mass” before the Effect to target every character within 5m, or “…all within this arc” to target specific characters. The arc must be the area in front of the character between their arms, a character may not designate the area behind them as the arc for a Mass Effect.", "");
  featCode = featCode.replace("Any weapons or IC items (other than armour or clothing) that are being held or worn visibly by an unresisting character may be freely taken by asking the player to hand them over. To facilitate this we have an IC searching mechanic. While searching another character, you should mime actions of searching them without touching the target.", "");
  featCode = featCode.replace(" You should spend 30 seconds", "</p><p> You should spend 30 seconds");
  featCode = featCode.replace("A barrier of invisible magical energy surrounds the character casting the Spell.", "");
  featCode = featCode.replace("This Effect is instantaneous and may only be cast on the source. ", "");
  featCode = featCode.replace(", this is the “charges” that the Ward Spell has", "");
  featCode = featCode.replace(" in their Ward", "");
  featCode = featCode.replace("At no point should a player be out of character grappled or restrained. However there may be situations where a character needs to be restrained. To do so, you will need a phys rep of some kind, such as a ribbon or a sash. ", "");
  featCode = featCode.replace("<span style='font-size:12px;'>This Effect is instantaneous.", "<span>This Effect is instantaneous.");
  featCode = featCode.replace("<span>Certain actions in these rules refer", "<span style='font-size:12px;'>Certain actions in these rules refer");
  featCode = featCode.replace("<span><p>At no point should a player be out of character ", "<span style='font-size:12px;'><p>At no point should a player be out of character ");
  featCode = featCode.replace("<span><p>This Effect is instantaneous. When this Effect targets a character’s armour", "<span style='font-size:11px;'><p>This Effect is instantaneous. When this Effect targets a character’s armour");
}

document.getElementById("featsContainer").innerHTML += featCode;
}

function manageKeywordsOnPopup(keyword){
  let returnText = "";

  return keyword;
}

addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)
  