# 🎨 Neural Network Hero Component

> A stunning, animated hero section with a generative neural network shader background

---

## 🌟 Features

- 🎨 **Custom CPPN Shader** - Generative art background using neural network patterns
- ✨ **GSAP Animations** - Smooth, professional text reveals and transitions
- 🎯 **3D Canvas** - Powered by React Three Fiber
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Smart rendering and animation controls
- 🎭 **TypeScript** - Fully typed for better DX
- ♿ **Accessible** - ARIA labels and semantic HTML

---

## 📦 Usage

### Basic

```tsx
import Hero from "@/components/ui/neural-network-hero";

export default function Page() {
  return (
    <Hero 
      title="Your Amazing Title"
      description="Your compelling description here."
    />
  );
}
```

### With All Options

```tsx
import Hero from "@/components/ui/neural-network-hero";

export default function Page() {
  return (
    <Hero 
      title="Build Your AI Workforce"
      description="Cognitive teams that work 24/7 and evolve with your business."
      badgeText="Automate Everything"
      badgeLabel="New"
      ctaButtons={[
        { text: "Get Started", href: "#start", primary: true },
        { text: "Learn More", href: "#learn" }
      ]}
      microDetails={[
        "Enterprise-grade AI",
        "24/7 automation",
        "Strategic capacity"
      ]}
    />
  );
}
```

---

## 🎯 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ Yes | - | Main heading text |
| `description` | `string` | ✅ Yes | - | Subheading text |
| `badgeText` | `string` | ❌ No | "Generative Surfaces" | Badge content text |
| `badgeLabel` | `string` | ❌ No | "New" | Badge label |
| `ctaButtons` | `Array` | ❌ No | Default CTAs | Array of button objects |
| `microDetails` | `Array<string>` | ❌ No | Default details | Small text items |

### CTA Button Object

```typescript
{
  text: string;        // Button text
  href: string;        // Link URL
  primary?: boolean;   // Use primary style?
}
```

---

## 🎨 Examples

### Minimal

```tsx
<Hero 
  title="Simple & Clean"
  description="Just the essentials."
/>
```

### Business Focus

```tsx
<Hero 
  title="Transform Your Business"
  description="AI-powered solutions that scale with you."
  badgeText="Enterprise Ready"
  badgeLabel="2024"
  ctaButtons={[
    { text: "Start Free Trial", href: "#trial", primary: true },
    { text: "Book Demo", href: "#demo" },
    { text: "View Pricing", href: "#pricing" }
  ]}
  microDetails={[
    "No credit card required",
    "Setup in 5 minutes",
    "Cancel anytime"
  ]}
/>
```

### Technical Product

```tsx
<Hero 
  title="Developer-First API"
  description="Build powerful integrations in minutes, not days."
  badgeText="v2.0 Released"
  badgeLabel="New"
  ctaButtons={[
    { text: "Read Docs", href: "#docs", primary: true },
    { text: "Try Sandbox", href: "#sandbox" }
  ]}
  microDetails={[
    "RESTful & GraphQL",
    "99.99% uptime SLA",
    "Comprehensive SDKs"
  ]}
/>
```

---

## 🎬 Animation Details

The component features sophisticated GSAP-powered animations:

1. **Badge** - Fades in from top (0.5s)
2. **Title** - Line-by-line reveal with blur effect (0.9s, staggered)
3. **Description** - Smooth fade and slide (0.5s)
4. **CTA Buttons** - Staggered entrance (0.5s)
5. **Micro Details** - Sequential reveal (0.5s, staggered)
6. **Background** - Blur to sharp reveal (1.5s)

### Customizing Animations

Edit the `useGSAP` hook in the component:

```typescript
tl.to(split.lines, {
  duration: 0.9,      // Change animation speed
  stagger: 0.15,      // Change delay between lines
  ease: 'power3.out'  // Change easing function
});
```

---

## 🎨 Styling

The component uses Tailwind CSS. Customize by:

### Changing Colors

```tsx
// In the component file
<div className="bg-purple-500/10">  {/* Change background opacity */}
  {/* content */}
</div>
```

### Adjusting Spacing

```tsx
<div className="px-6 pb-24 pt-36">  {/* Adjust padding */}
  {/* content */}
</div>
```

### Typography

```tsx
<h1 className="text-5xl">  {/* Change text size */}
  {title}
</h1>
```

---

## ⚙️ Dependencies

This component requires:

- `gsap` - Animation engine
- `@gsap/react` - React hooks for GSAP
- `three` - 3D rendering
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Helper utilities

All dependencies are already installed in the project.

---

## 🐛 Troubleshooting

### Background not showing?

Ensure the parent has height:

```tsx
<div className="h-screen">
  <Hero {...props} />
</div>
```

### Animations not working?

Check browser console for errors. The component uses SplitText which requires a GSAP license.

**Quick fix (without SplitText):**

Replace the SplitText animation with a simple fade:

```typescript
gsap.to(headerRef.current, {
  autoAlpha: 1,
  y: 0,
  duration: 0.9
});
```

### Performance issues?

Try reducing shader quality:

```typescript
<Canvas
  dpr={[1, 1.5]}  // Reduce from [1, 2]
  // ...
/>
```

---

## 📱 Responsive Behavior

| Breakpoint | Title Size | Layout |
|------------|------------|--------|
| Mobile (<640px) | 3rem (48px) | Single column |
| Tablet (640px+) | 3.75rem (60px) | Single column |
| Desktop (768px+) | 4.5rem (72px) | Optimized spacing |

---

## ♿ Accessibility

The component includes:

- ✅ Semantic HTML (`<section>`, `<h1>`, etc.)
- ✅ ARIA labels for decorative elements
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Screen reader friendly

---

## 📄 License

Part of the Liberators AI project.

---

## 🚀 Live Demo

Visit these pages to see it in action:

- `/demo` - Basic demo
- `/liberators-hero-demo` - Liberators AI styled

---

**Built with ❤️ using React, Three.js, and GSAP**




