---
title: How I am customizing my Quartz blog
draft: false
tags:
  - howto
date: 2025-02-20
---

This blog started as a simple idea and need: a place to share what I do and what interests me.

What I didn’t expect was that I’d end up being hooked on color palettes, spiraling into the psychology of fonts, rewiring Quartz to work the way I wanted it to, and spending hours tweaking the layout. I’m learning a lot along the way.

Let me walk you through what I’ve done so far - and what I’ve broken (and fixed) along the way.

---
## 🎨 Finding the right colors
For the first time I found myself actively searching for a color palette that felt like "me."

I used [Color Hunt](https://colorhunt.co/) and went with the **Sage + Pastel** combinations. They’re soft, a little muted, and give the blog a **calm-but-not-too-serious** look. 

I also discovered this site, [Happy Hues](https://www.happyhues.co/), which is very useful because it allows you to try out complex color combinations on the existing site. My favorite combinations are [11 (light)](https://www.happyhues.co/palettes/11) and [16 (dark)](https://www.happyhues.co/palettes/16), not implemented yet.

If you’ve never spent an hour staring at different shades of green trying to determine which one best represents your existence, I highly recommend it. It’s a journey.

## 📝 Naming the blog
The first name idea was [_**"'Deed I Do"**_](https://youtu.be/iT0ussu9dOk?feature=shared), like the jazz song. The idea was simple: this blog is about **things I actually do** and what interests me. Also, I have a very close personal connection with that song.

But since the blog runs on **Obsidian + Quartz**, I got sidetracked into **geology-inspired names**:

- 🏵️ **Tourmaline Blooms**
- 💜 **Lavender Tourmaline**
- 🏡 **Tourmaline/Feldspar Nest**

Prioritizing simplicity, I've opted for Tourmaline. I _love_ that Quartz makes it feel like I’m **crafting a tiny digital mineral garden**.

## 🔤 Side quest: the psychology of fonts
Fonts were supposed to be a **quick** decision. Spoiler: they weren’t.

I started reading the [Google Fonts Blog](https://fonts.google.com/knowledge) and suddenly found myself **deep into the science of how fonts shape perception, memory, and emotion.**

Eventually I settled on:
- ✨ **Header:** `"Gabarito"` (modern, bold, a little quirky)
    
- 📖 **Body:** `"Quicksand"` (soft, friendly, readable)
    
- 💻 **Code:** `"IBM Plex Mono"` (because I refuse to read code in anything else).

Now I get how typography is so _weirdly powerful_.

## ⚙️ Setting up Quartz

I’m using **Obsidian for writing** and **Quartz to publish my vault as a static site**. Quartz is amazing, but **I wanted a more personalized setup**, so I had to tinker with it.

### Customizing the navigation bar
I wanted a **hover-based navigation bar** with **icons** that **reveal text when hovered**, and I found the perfect base on [Uiverse](https://uiverse.io/)—a site full of gorgeous UI components.

I adapted [this design](https://uiverse.io/00Kubi/slippery-earwig-94) and turned it into my own Quartz component.

1. Created [`quartz/components/NavBar.tsx`](https://github.com/lucianatanzarella/lucianatanzarella.github.io/blob/v4/quartz/components/NavBar.tsx)
2. Modified [`quartz/styles/custom.css`](https://github.com/lucianatanzarella/lucianatanzarella.github.io/blob/v4/quartz/styles/custom.scss)
### Making Quartz read `showDate` and `showReadingTime` from Frontmatter

By default, Quartz **always shows the date and reading time on every post**, but I wanted more control. I wanted to be able to **turn them on or off per note** using **frontmatter metadata** in Markdown files.

So, I modified [`ContentMeta.tsx`](https://github.com/lucianatanzarella/lucianatanzarella.github.io/blob/v4/quartz/components/ContentMeta.tsx) to check for `showDate` and `showReadingTime` in frontmatter. Now, in any note, I can control these settings by adding:
```
--- 
title: "My Post" 
showDate: false 
showReadingTime: true 
---
```
✅ Want a cleaner look? Hide the date.  
✅ Writing a long post? Keep the reading time.

Simple, flexible, and exactly how I want it!
## **💡 Where it all started**

I didn’t figure all of this out on my own: I learnt from amazing people who documented their own Quartz setups and shared their experiences.

The biggest push came from my amazing friend [Duckling Dev](https://lucabello.github.io/): he  showed me how to break things down and customize Quartz (here's a Quack for you 🦆).
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
Other examples that guided me were:

- 📚 [Fork My Brain](https://notes.nicolevanderhoeven.com/Fork+My+Brain) by Nicole van der Hoeven,
- 🐟 [The Pond](https://turntrout.com/) by Alex Turner.

Seeing how these people **experimented, documented, and shared their setups** made me realize I could do (and want to do) the same.

---
✨ _If you’re also building a Quartz blog, let me know what you’ve customized!_ 