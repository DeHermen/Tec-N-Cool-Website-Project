# Tec'N'Cool Project 🎬📚🎭

**Tec'N'Cool** is a cultural catalog platform that bridges academic knowledge with contemporary culture. The project curates films, TV shows, and books across three main categories: **Economy & Culture**, **Environment & Culture**, and **Law & Culture**.

## 📋 Table of Contents

- [Project Overview]
- [Project Structure]
- [Getting Started]
- [How to Add New Content]
  - [Step 1: Choose Your Category]
  - [Step 2: Prepare Your Thumbnail Image]
  - [Step 3: Edit the Appropriate JSON File]
  - [Step 4: Test Your Changes]
- [JSON Data Structure Reference]
- [Common Mistakes to Avoid]
- [Troubleshooting]


---

## 🎯 Project Overview

Tec'N'Cool offers over 250 curated cultural resources organized into:

- **3 Categories**: Economy, Environment, Law
- **3 Media Types**: Films, TV Shows, Books
- **9 JSON Data Files**: One for each combination of category and media type

The platform allows students, teachers, researchers, and companies to explore how academic topics are represented in popular culture.

---

## 📁 Project Structure

```
project/
│
├── index.html              # Homepage
├── catalog.html            # Browse catalog page
├── details.html            # Individual item details page
│
├── css/
│   ├── styles.css          # Global styles
│   ├── catalog.css         # Catalog page styles
│   └── details.css         # Details page styles
│
├── js/
│   ├── main.js             # Global JavaScript
│   ├── catalog.js          # Catalog functionality
│   └── details.js          # Details page functionality
│
├── json/                   # ⭐ DATA FILES - WHERE YOU ADD CONTENT
│   ├── data_film_econ.json       # Economy films
│   ├── data_film_envrn.json      # Environment films
│   ├── data_film_law.json        # Law films
│   ├── data_shows_econ.json      # Economy TV shows
│   ├── data_shows_envrn.json     # Environment TV shows
│   ├── data_shows_law.json       # Law TV shows
│   ├── data_books_econ.json      # Economy books
│   ├── data_books_envrn.json     # Environment books
│   └── data_books_law.json       # Law books
│
├── thumbnails/             # ⭐ IMAGE FILES - WHERE YOU ADD IMAGES
│   ├── Film_Name_film.jpg
│   ├── Show_Name_show.jpg
│   └── Book_Name_book.jpg
│
└── imgs/
    └── [project logos and category images]
```

---

## 🚀 Getting Started

### Prerequisites

- A text editor (Notepad, Visual Studio Code, Sublime Text, etc.)
- Basic understanding of JSON format (don't worry, imma explain everything!)
- Your content ready (film/show/book information)
- An image file for the thumbnail

### Opening the Project

1. Download or clone the project to your computer
2. Navigate to the project folder
3. Open the folder in your text editor

---

## ➕ How to Add New Content

Follow these steps **carefully** to add a new film, TV show, or book to the website.

---

### Step 1: Choose Your Category

First, determine which JSON file you need to edit based on:

**Category:**
- Economy & Culture → `econ`
- Environment & Culture → `envrn`
- Law & Culture → `law`

**Media Type:**
- Films → `film`
- TV Shows → `shows`
- Books → `books`

**Example Combinations:**
- Economy film → `json/data_film_econ.json`
- Environment book → `json/data_books_envrn.json`
- Law TV show → `json/data_shows_law.json`

---

### Step 2: Prepare Your Thumbnail Image

1. **Find or create an image** for your content (poster, book cover, etc.)
2. **Name the file properly:**
   - For films: `Title_Of_Film_film.jpg` (e.g., `Avatar_film.jpg`)
   - For TV shows: `Title_Of_Show_show.jpg` (e.g., `Suits_show.jpg`)
   - For books: `Title_Of_Book_book.jpg` (e.g., `Dune_book.jpg`)
3. **Save the image** in the `thumbnails/` folder
4. **Important naming rules:**
   - Replace spaces with underscores (`_`)
   - Use the exact title as it appears in your JSON entry
   - Always end with `_film.jpg`, `_show.jpg`, or `_book.jpg`

**Examples:**
- "The Big Short" → `The_Big_Short_film.jpg`
- "How to Get Away with Murder" → `How_to_Get_Away_with_Murder_show.jpg`
- "Silent Spring" → `Silent_Spring_book.jpg`

---

### Step 3: Edit the Appropriate JSON File

#### 🎬 For Films

1. Open the appropriate film JSON file (e.g., `json/data_film_law.json`)
2. Find the last entry in the file (look for the last `}` before the closing `]`)
3. Add a comma after the last entry's closing `}`
4. Copy this template and paste it after the comma:

```json
{
    "id": X,
    "title": "Film Title Here",
    "director": "Director Name",
    "release_date": "YYYY-MM-DD",
    "cast": [
        "Actor 1",
        "Actor 2",
        "Actor 3"
    ],
    "production": "Production Company Name",
    "distribution": "Distribution Company Name",
    "screenwriting": "Screenwriter Name",
    "genre": [
        "Genre1",
        "Genre2"
    ],
    "trailer": "https://youtube.com/watch?v=TRAILER_ID",
    "synopsis": "Film description here. Keep it concise but informative.",
    "image": "../thumbnails/Film_Title_film.jpg"
}
```

5. **Fill in the information:**
   - `id`: The next number in sequence (if last ID is 77, use 78)
   - `title`: Exact title of the film
   - `director`: Director's full name
   - `release_date`: Format must be YYYY-MM-DD (e.g., "2019-05-15")
   - `cast`: List actors in square brackets, each name in quotes, separated by commas
   - `production`: Production company name(s)
   - `distribution`: Distribution company name(s)
   - `screenwriting`: Screenwriter name(s)
   - `genre`: List genres in square brackets (e.g., ["Drama", "Thriller"])
   - `trailer`: Full YouTube URL
   - `synopsis`: Brief description (2-5 sentences)
   - `image`: Path to your thumbnail (use the exact filename you created in Step 2)

**Complete Example:**

```json
{
    "id": 79,
    "title": "The Verdict",
    "director": "Sidney Lumet",
    "release_date": "1982-12-08",
    "cast": [
        "Paul Newman",
        "Charlotte Rampling",
        "Jack Warden",
        "James Mason"
    ],
    "production": "Richard D. Zanuck, David Brown",
    "distribution": "20th Century Fox",
    "screenwriting": "David Mamet",
    "genre": [
        "Drama",
        "Legal"
    ],
    "trailer": "https://www.youtube.com/watch?v=XvDR557AUMo",
    "synopsis": "A down-on-his-luck alcoholic lawyer accepts a medical malpractice case to improve his own situation, but discovers he is actually faced with a conspiracy.",
    "image": "../thumbnails/The_Verdict_film.jpg"
}
```

---

#### 📺 For TV Shows

1. Open the appropriate TV show JSON file (e.g., `json/data_shows_law.json`)
2. Find the last entry and add a comma after it
3. Copy this template:

```json
{
    "id": "X",
    "title": "Show Title Here",
    "creator": "Creator Name(s)",
    "release_date": "YYYY-MM-DD",
    "cast": [
        "Actor 1",
        "Actor 2",
        "Actor 3"
    ],
    "production": "Production Company",
    "executive_producers": "Executive Producer Names",
    "seasons": "Number (YYYY-YYYY)",
    "genre": [
        "Genre1",
        "Genre2"
    ],
    "trailer": "https://youtube.com/watch?v=TRAILER_ID",
    "storyline": "Show description here. Explain the premise and main storyline.",
    "image": "../thumbnails/Show_Title_show.jpg"
}
```

4. **Fill in the information:**
   - `id`: Use a **string** (with quotes) for TV shows: "1", "2", "3"
   - `title`: Exact title of the show
   - `creator`: Creator's name(s)
   - `release_date`: First air date in YYYY-MM-DD format
   - `cast`: Main cast members in square brackets
   - `production`: Production company/companies
   - `executive_producers`: Names of executive producers
   - `seasons`: Format as "Number (Start-End)" e.g., "5 (2011-2019)"
   - `genre`: List genres
   - `trailer`: Full YouTube URL
   - `storyline`: Brief description of the show's premise
   - `image`: Path to thumbnail

**Complete Example:**

```json
{
    "id": "9",
    "title": "Better Call Saul",
    "creator": "Vince Gilligan, Peter Gould",
    "release_date": "2015-02-08",
    "cast": [
        "Bob Odenkirk",
        "Jonathan Banks",
        "Rhea Seehorn",
        "Patrick Fabian"
    ],
    "production": "Sony Pictures Television",
    "executive_producers": "Vince Gilligan, Peter Gould",
    "seasons": "6 (2015-2022)",
    "genre": [
        "Crime",
        "Drama"
    ],
    "trailer": "https://www.youtube.com/watch?v=9q4qzYrHVmI",
    "storyline": "The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico as Saul Goodman.",
    "image": "../thumbnails/Better_Call_Saul_show.jpg"
}
```

---

#### 📚 For Books

1. Open the appropriate book JSON file (e.g., `json/data_books_econ.json`)
2. Find the last entry and add a comma after it
3. Copy this template:

```json
{
    "id": X,
    "title": "Book Title Here",
    "author": "Author Name",
    "publication_year": "YYYY",
    "original_language": "Language",
    "publisher": "Publisher Name",
    "ISBN": "ISBN Number",
    "more_info": "https://www.goodreads.com/book/...",
    "synopsis": "Book description here. Summarize the main themes and content.",
    "image": "../thumbnails/Book_Title_book.jpg"
}
```

4. **Fill in the information:**
   - `id`: Next number in sequence
   - `title`: Exact book title
   - `author`: Author's full name
   - `publication_year`: Year published (as a string, e.g., "2019")
   - `original_language`: Language the book was originally written in
   - `publisher`: Publisher name
   - `ISBN`: ISBN number (with or without dashes)
   - `more_info`: Link to Goodreads or another book information page
   - `synopsis`: Brief description of the book's content
   - `image`: Path to thumbnail

**Complete Example:**

```json
{
    "id": 16,
    "title": "The Jungle",
    "author": "Upton Sinclair",
    "publication_year": "1906",
    "original_language": "English",
    "publisher": "Doubleday, Page & Company",
    "ISBN": "9780486419237",
    "more_info": "https://www.goodreads.com/book/show/41681.The_Jungle",
    "synopsis": "The Jungle is a novel that portrays the harsh conditions and exploited lives of immigrants in the United States in Chicago and similar industrialized cities. The book depicts working-class poverty, the lack of social supports, harsh and unpleasant living and working conditions, and a hopelessness among many workers.",
    "image": "../thumbnails/The_Jungle_book.jpg"
}
```

---

### Step 4: Test Your Changes

1. **Save your JSON file**
2. **Open your web browser**
3. **Open the `index.html` file** from your project folder
4. **Navigate to the appropriate category**
5. **Search for your newly added content** to verify it appears correctly
6. **Click on the item** to check the details page displays properly

**What to check:**
- ✅ Thumbnail image displays correctly
- ✅ All information appears on the catalog page
- ✅ Details page shows complete information
- ✅ Trailer link works (if applicable)
- ✅ Genre tags display properly

---

## 📖 JSON Data Structure Reference

### Quick Reference Guide

| Field | Type | Required | Example |
|-------|------|----------|---------|
| **Films** |
| id | Number | Yes | `79` |
| title | String | Yes | `"The Verdict"` |
| director | String | Yes | `"Sidney Lumet"` |
| release_date | String (YYYY-MM-DD) | Yes | `"1982-12-08"` |
| cast | Array of Strings | Yes | `["Paul Newman", "Jack Warden"]` |
| production | String | Yes | `"Richard D. Zanuck"` |
| distribution | String | Yes | `"20th Century Fox"` |
| screenwriting | String | Yes | `"David Mamet"` |
| genre | Array of Strings | Yes | `["Drama", "Legal"]` |
| trailer | String (URL) | Yes | `"https://youtube.com/watch?v=..."` |
| synopsis | String | Yes | `"A lawyer accepts a case..."` |
| image | String (Path) | Yes | `"../thumbnails/The_Verdict_film.jpg"` |
| **TV Shows** |
| id | String | Yes | `"9"` |
| title | String | Yes | `"Better Call Saul"` |
| creator | String | Yes | `"Vince Gilligan, Peter Gould"` |
| release_date | String (YYYY-MM-DD) | Yes | `"2015-02-08"` |
| cast | Array of Strings | Yes | `["Bob Odenkirk"]` |
| production | String | Yes | `"Sony Pictures Television"` |
| executive_producers | String | Yes | `"Vince Gilligan, Peter Gould"` |
| seasons | String | Yes | `"6 (2015-2022)"` |
| genre | Array of Strings | Yes | `["Crime", "Drama"]` |
| trailer | String (URL) | Yes | `"https://youtube.com/watch?v=..."` |
| storyline | String | Yes | `"The story of Jimmy McGill..."` |
| image | String (Path) | Yes | `"../thumbnails/Better_Call_Saul_show.jpg"` |
| **Books** |
| id | Number | Yes | `16` |
| title | String | Yes | `"The Jungle"` |
| author | String | Yes | `"Upton Sinclair"` |
| publication_year | String | Yes | `"1906"` |
| original_language | String | Yes | `"English"` |
| publisher | String | Yes | `"Doubleday, Page & Company"` |
| ISBN | String | Yes | `"9780486419237"` |
| more_info | String (URL) | Yes | `"https://www.goodreads.com/..."` |
| synopsis | String | Yes | `"The Jungle portrays..."` |
| image | String (Path) | Yes | `"../thumbnails/The_Jungle_book.jpg"` |

---

## ⚠️ Common Mistakes to Avoid

### 1. **Missing Comma**
```json
// ❌ WRONG - Missing comma after previous entry
{
    "id": 78,
    "title": "Old Entry"
}
{
    "id": 79,
    "title": "New Entry"
}

// ✅ CORRECT - Comma added
{
    "id": 78,
    "title": "Old Entry"
},
{
    "id": 79,
    "title": "New Entry"
}
```

### 2. **Wrong ID Type**
```json
// ❌ WRONG for TV Shows - Using number instead of string
{
    "id": 9,
    "title": "Show Name"
}

// ✅ CORRECT for TV Shows - ID must be a string
{
    "id": "9",
    "title": "Show Name"
}
```

### 3. **Incorrect Image Path**
```json
// ❌ WRONG - Incorrect path or filename
"image": "thumbnails/the verdict.jpg"

// ✅ CORRECT - Proper path with underscores
"image": "../thumbnails/The_Verdict_film.jpg"
```

### 4. **Wrong Date Format**
```json
// ❌ WRONG - Various incorrect formats
"release_date": "12/08/1982"
"release_date": "1982"
"release_date": "December 8, 1982"

// ✅ CORRECT - Must be YYYY-MM-DD
"release_date": "1982-12-08"
```

### 5. **Improper Array Formatting**
```json
// ❌ WRONG - Not using array brackets
"cast": "Paul Newman, Jack Warden"

// ✅ CORRECT - Using array with brackets
"cast": [
    "Paul Newman",
    "Jack Warden"
]
```

### 6. **Trailing Comma**
```json
// ❌ WRONG - Comma after last entry
{
    "id": 79,
    "title": "Last Entry",
},  // ← This comma should not be here
]

// ✅ CORRECT - No comma after last entry
{
    "id": 79,
    "title": "Last Entry"
}
]
```

### 7. **Special Characters Issues**
```json
// ⚠️ CAREFUL with quotes in text
// ❌ WRONG - Using same quotes inside text
"synopsis": "A lawyer's case"

// ✅ CORRECT - Escape quotes or use different type
"synopsis": "A lawyer's case"
// OR
"synopsis": "A lawyer's case"
```

---

## 🔧 Troubleshooting

### Problem: "My new entry doesn't appear on the website"

**Solutions:**
1. Check that you saved the JSON file
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Clear your browser cache
4. Verify the JSON file syntax is correct (use a JSON validator online)
5. Make sure the ID is unique and follows the correct format

### Problem: "The image doesn't show up"

**Solutions:**
1. Verify the image is in the `thumbnails/` folder
2. Check the filename matches exactly (including underscores and extension)
3. Ensure the `image` path in JSON is `"../thumbnails/Your_File_name.jpg"`
4. Check that the image file format is supported (.jpg, .jpeg, .png)

### Problem: "I get a blank page or error"

**Solutions:**
1. **JSON syntax error** - Use a JSON validator (https://jsonlint.com/)
2. Check for:
   - Missing commas between entries
   - Missing quotes around strings
   - Unclosed brackets `[ ]` or braces `{ }`
   - Trailing commas after the last entry

### Problem: "How do I validate my JSON?"

**Steps:**
1. Go to https://jsonlint.com/
2. Copy your entire JSON file content
3. Paste it into the validator
4. Click "Validate JSON"
5. If there are errors, the validator will show you exactly where they are

### Problem: "The trailer link doesn't work"

**Solutions:**
1. Make sure you're using the full YouTube URL
2. Format should be: `https://www.youtube.com/watch?v=VIDEO_ID`
3. Test the link in your browser first before adding it

---

## 📝 Step-by-Step Checklist

Use this checklist when adding new content:

- [ ] Determine category (Economy/Environment/Law)
- [ ] Determine media type (Film/Show/Book)
- [ ] Identify correct JSON file to edit
- [ ] Prepare thumbnail image
- [ ] Name image file correctly (Title_Of_Item_type.jpg)
- [ ] Save image in thumbnails/ folder
- [ ] Open correct JSON file in text editor
- [ ] Find the last entry in the JSON array
- [ ] Add comma after last entry
- [ ] Copy appropriate template (Film/Show/Book)
- [ ] Paste template after the comma
- [ ] Fill in all required fields
- [ ] Verify ID is next in sequence
- [ ] Check ID type (number for films/books, string for shows)
- [ ] Ensure date format is YYYY-MM-DD
- [ ] Verify image path matches your thumbnail filename
- [ ] Check for any special characters that need escaping
- [ ] Remove trailing comma after your new entry if it's the last one
- [ ] Save the JSON file
- [ ] Validate JSON syntax at jsonlint.com
- [ ] Open website in browser
- [ ] Navigate to appropriate category
- [ ] Verify new entry appears in catalog
- [ ] Click on entry to check details page
- [ ] Test trailer link (if applicable)
- [ ] Check that all information displays correctly

---

## 🎓 Additional Tips

### For Beginners:

1. **Start with one entry** - Don't try to add multiple items at once initially
2. **Copy existing entries** - Use them as templates to understand the structure
3. **Use a JSON validator** - Always validate before testing in browser
4. **Keep backups** - Before making changes, make a copy of the original JSON file
5. **Ask for help** - If stuck, compare your entry with working examples in the file

### For Advanced Users:

1. **Batch additions** - You can add multiple entries at once, but validate carefully
2. **Automated tools** - Consider using scripts to generate entries from spreadsheets
3. **Image optimization** - Compress images before adding to reduce load times
4. **Consistent formatting** - Maintain the same indentation style as existing entries

---

## 📧 Need Help?

If you encounter issues not covered in this guide:

1. Check existing entries in the JSON file for examples
2. Validate your JSON syntax at https://jsonlint.com/
3. Contact the website builder (me - Gui Marques)
4. Review the error messages in your browser's developer console (F12)

---

## 📄 License

© 2025 Tec'N'Cool Project  
CEI & ISCAP | Politécnico do Porto

---

## 👨‍💻 Developer
Developed by: [Guilherme Marques]
Role: Full-Stack Website Developer
Institution: ISCAP - Instituto Superior de Contabilidade e Administração do Porto
Contact: [guilherme.jcmarques@gmail.com]
GitHub: [github.com/GJCMarques]
LinkedIn: [linkedin.com/in/guilherme-josé-costa-marques]

---

**Last Updated:** December 2025  
**Version:** 1.0

---

**Happy cataloging! 🎉**
