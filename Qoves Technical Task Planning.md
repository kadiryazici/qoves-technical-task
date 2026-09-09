# Qoves Technical Task Planning

First thing I thought when I saw the design was “image and network optimization”.

- I’ll convert images to .webp format to use less network and optimize first paint time. I’m going to use an offline application to convert images.
- Also will preload the images on the hero section to prevent layout shift after load and welcome the user with a complete section.
- Convert the video to `webm` but also include a `mp4` version for Safari. I’ll use Handbrake program to optimize the video.
- I'll create a prompt to create the boilerplate project. I'll request AI agent to create every single component without styles and just a div and will improve the components later. First commit of the repository will be boilerplate components code made with AI agents use.

## General Styling
I'll use `clsx` for dynamic class names.

I’ll create components with support for all HTML attributes. Such as `<SteppedCard className="absolute" />` because in the future this component might require different stylings.

First section has an svg path animation and it looks like it’s hidden under 1440px. The bottom cards has an hover effect but they are seems to not clickable. I guess the reason why this is hidden under 1440px is because of svg animation. A different style or a different svg path can be created for mobile devices. Or pure css animations.

I’ll export the SVG from Figma and use an AI agent to make the dot and trail to follow the given path.

## Layouting

I’ll create three components for every section. `<PageSection />` Which will be the main wrapper of the section with unlimited width. `<PageSectionContent />` will have a maximum width, an inner padding and self centering. `<PageSectionContentBackground />` will be absolute positioned component and it will be placed inside the section. It will be behind section content but will have same width and centering capabilities. 

I’ll create `ContentHeader`  component with custom props 

## Future Proofness

To make components future proof, I'll isolate functionality to seperate sub components and separate hooks for easy manipulation.

I'll use media queries and container queries for responsvieness. and `useMedia` hook if plain css is not enough to achieve the desired effect.

The main challange I see in this design is SVG animation in Hero component. It's not simple to create path following animations in HTML and CSS. So I might need some custom SVG animation library or some JavaScript approach.

## Implementation Strategy

I'll start by implementing with a "atom to template" strategy. I'll start with creating base components and then climbing to the more complex ones.

I'll follow the development with Storybook previews.

I'll create mixins, variables and scss functions for reusable styling.

## Hero

Hero has an svg path animation and it looks like it’s hidden under 1440px. The bottom cards has an hover effect but they are seems to not clickable. I guess the reason why this is hidden under 1440px is because of svg animation. A different style or a different svg path can be created for mobile devices. Or pure css animations.

I’ll export the SVG from Figma and use an AI agent to make the dot and trail to follow the given path.

### Main Challange

to create the animation around the face cards I decided to create a different approach than the one made in Figma.

In Figma there are multiple paths and css native border. To animate squares easily I decide to create an SVG path spesificall for motion and outer border. I'll use pen tool and carefully create the same outline border with inline and outline curves. And then use SVG + Gsap animations for squares to follow the motion path correctly.

Will get help from Codex for spesifically this case.

# Facial Analysis Section

This section has multiple interactive graphics components. I’m going to use both motion and css animations for these components. If just css is enough for hover animation, I’ll choose it. For more complex animations like svg path transformation, I’ll use motion.

for graphics, I'll describe AI agents what I need to do. I'll create a structured prompt for the AI agent to follow. 

I have two choices for rectangle graphic. First one is a mask + radial gradient + transform x and z, second one is animating square's opacity independently. Mask one is the easiest to implement so I'll go with that. It also will allow me to create different shapes in the future.

Also content header's design is a bit different in this section. Badge has different padding, content header has different gap and different typography. I'll create a different type for content header component like "primary" and "secondary"

# FAQ Section

This is a classic Accordion component behavior but nested. I'll create Accordion components with extra props to handle the nested behavior and style changes.

# Last Section

I'll create an optimized video using Handbrake, I'll remove the audio and wil save 80% of the video size.
On desktop the section will have a custom scroll height, I'm currently guessing 3x window height. 
To trakc scroll position and update the background video and other elements visuals, I'll use gsap's scroll timeline.
