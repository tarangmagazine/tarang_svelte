* layout.svelte file for responsive header and footer (Will be common for the entire website)

  * Header will contain links to previous editions 
  * Link to most recent edition
  * About us - How to contribute articles to Tarang
  * One link which always point to this page
  * Footer will contain all the social media links

* The main file +page.svelte

  * Inherits the header and footer
  * Visual summary of Tarang
  * Textual summary of Tarang
  * Magazine card pointing to the latest edition
  * Article collection which shows the selected articles to be displayed on the front page - Pulled from strapi (live)
  * Built in paging mechanism which controls the number of entries to be pulled.
  * Each article card should contain the following information

    * Article thumbnail image.
    * Article title
    * Article author
    * Mins read
    * Link to issuu article story
    * Link to articles/[edition_id]/[article_id]
    * Above attributes will be pulled from Strapi using article's unique ID.
    * While pulling, we should be able to load as many articles as needed (Responsive - Different for desktop / mobile)


* editions/+page.svelte

  * All the editions published thus far [Strapi - No key. Pagination]
  * Displays a list of magazine cards, each of which contains info about the specific edition

    * Magazine image
    * Descriptive text about the edition (typically shared in whatsapp)
    * Publishing date
    * Link to issuu
    * Link to edition/[edition_id]/
    * [Strapi Key: edition_id]

  * [TBD] Layout of all the editions - Mobile and desktop

* edition/[slug]/+page.svelte file - Very similar to the article collection shown in the main page with two main differences.

    * Articles displayed belong to the magazine selected.
    * Since this is a new page, more space is available 

* article/[slug]/+page.svelte - This is the actual article page. If we choose to link to article stories (then we do not rendering logic)

  * Render the article which includes textual components (title, author, body, quotations), images, embedding videos
  * All the information will be pulled from Strapi using magazine ID and the article ID as the key

