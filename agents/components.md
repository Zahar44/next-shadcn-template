# shadcn/ui Components Reference

This document lists all installed shadcn/ui components with their file paths, imports, and use cases.

---

## Inputs

| Component    | Path                                 | Import                                                                                                                                              | Purpose                                      |
| ------------ | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Button       | `src/components/ui/button.tsx`       | `import { Button, buttonVariants } from "@/components/ui/button"`                                                                                   | Clickable action trigger with variants       |
| Input        | `src/components/ui/input.tsx`        | `import { Input } from "@/components/ui/input"`                                                                                                     | Single-line text input field                 |
| Textarea     | `src/components/ui/textarea.tsx`     | `import { Textarea } from "@/components/ui/textarea"`                                                                                               | Multi-line text input field                  |
| Label        | `src/components/ui/label.tsx`        | `import { Label } from "@/components/ui/label"`                                                                                                     | Accessible label for form controls           |
| Checkbox     | `src/components/ui/checkbox.tsx`     | `import { Checkbox } from "@/components/ui/checkbox"`                                                                                               | Boolean toggle input                         |
| Radio Group  | `src/components/ui/radio-group.tsx`  | `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`                                                                          | Single selection from multiple options       |
| Switch       | `src/components/ui/switch.tsx`       | `import { Switch } from "@/components/ui/switch"`                                                                                                   | On/off toggle control                        |
| Slider       | `src/components/ui/slider.tsx`       | `import { Slider } from "@/components/ui/slider"`                                                                                                   | Range value selection                        |
| Select       | `src/components/ui/select.tsx`       | `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"` | Dropdown selection input                     |
| Input OTP    | `src/components/ui/input-otp.tsx`    | `import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"`                                              | One-time password input                      |
| Toggle       | `src/components/ui/toggle.tsx`       | `import { Toggle, toggleVariants } from "@/components/ui/toggle"`                                                                                   | Two-state button                             |
| Toggle Group | `src/components/ui/toggle-group.tsx` | `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`                                                                       | Group of toggles with single/multi selection |

---

## Forms

| Component | Path                             | Import                                                                                                                                 | Purpose                                     |
| --------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Form      | `src/components/ui/form.tsx`     | `import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from "@/components/ui/form"` | React Hook Form integration with validation |
| Calendar  | `src/components/ui/calendar.tsx` | `import { Calendar } from "@/components/ui/calendar"`                                                                                  | Date picker calendar view                   |

---

## Data Display

| Component    | Path                                 | Import                                                                                                                                                | Purpose                       |
| ------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Card         | `src/components/ui/card.tsx`         | `import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"`                            | Container for grouped content |
| Badge        | `src/components/ui/badge.tsx`        | `import { Badge, badgeVariants } from "@/components/ui/badge"`                                                                                        | Status indicator or label     |
| Avatar       | `src/components/ui/avatar.tsx`       | `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"`                                                                        | User profile image            |
| Table        | `src/components/ui/table.tsx`        | `import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"`                    | Data table layout             |
| Separator    | `src/components/ui/separator.tsx`    | `import { Separator } from "@/components/ui/separator"`                                                                                               | Visual divider line           |
| Skeleton     | `src/components/ui/skeleton.tsx`     | `import { Skeleton } from "@/components/ui/skeleton"`                                                                                                 | Loading placeholder           |
| Chart        | `src/components/ui/chart.tsx`        | `import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"` | Data visualization wrapper    |
| Aspect Ratio | `src/components/ui/aspect-ratio.tsx` | `import { AspectRatio } from "@/components/ui/aspect-ratio"`                                                                                          | Maintain element aspect ratio |

---

## Overlays

| Component    | Path                                 | Import                                                                                                                                                                                                                                                                              | Purpose                            |
| ------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Dialog       | `src/components/ui/dialog.tsx`       | `import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog"`                                                                                               | Modal dialog window                |
| Alert Dialog | `src/components/ui/alert-dialog.tsx` | `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"` | Confirmation dialog with actions   |
| Sheet        | `src/components/ui/sheet.tsx`        | `import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"`                                                                                                                                     | Slide-out panel overlay            |
| Drawer       | `src/components/ui/drawer.tsx`       | `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"`                                                                                                                            | Mobile-friendly bottom sheet       |
| Popover      | `src/components/ui/popover.tsx`      | `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"`                                                                                                                                                                                                 | Floating content panel             |
| Tooltip      | `src/components/ui/tooltip.tsx`      | `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"`                                                                                                                                                                                | Hover hint text                    |
| Hover Card   | `src/components/ui/hover-card.tsx`   | `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"`                                                                                                                                                                                        | Rich hover preview                 |
| Command      | `src/components/ui/command.tsx`      | `import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"`                                                                                                           | Command palette / search interface |

---

## Menus

| Component     | Path                                  | Import                                                                                                                                                                                                                                                                                                                                                                      | Purpose                  |
| ------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Dropdown Menu | `src/components/ui/dropdown-menu.tsx` | `import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"` | Click-triggered dropdown |
| Context Menu  | `src/components/ui/context-menu.tsx`  | `import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@/components/ui/context-menu"`                 | Right-click menu         |
| Menubar       | `src/components/ui/menubar.tsx`       | `import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar"`                                                                     | Horizontal menu bar      |

---

## Navigation

| Component       | Path                                    | Import                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Purpose                        |
| --------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Navigation Menu | `src/components/ui/navigation-menu.tsx` | `import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"`                                                                                                                                                                                                | Site navigation with dropdowns |
| Breadcrumb      | `src/components/ui/breadcrumb.tsx`      | `import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"`                                                                                                                                                                                                                                                                                       | Hierarchical path indicator    |
| Pagination      | `src/components/ui/pagination.tsx`      | `import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"`                                                                                                                                                                                                                                                                                     | Page navigation controls       |
| Tabs            | `src/components/ui/tabs.tsx`            | `import { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants } from "@/components/ui/tabs"`                                                                                                                                                                                                                                                                                                                                                      | Tabbed content switcher        |
| Sidebar         | `src/components/ui/sidebar.tsx`         | `import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"` | Application sidebar layout     |

---

## Disclosure

| Component   | Path                                | Import                                                                                                     | Purpose                      |
| ----------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Accordion   | `src/components/ui/accordion.tsx`   | `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"` | Expandable content sections  |
| Collapsible | `src/components/ui/collapsible.tsx` | `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"`        | Toggle visibility of content |

---

## Feedback

| Component      | Path                             | Import                                                                        | Purpose                |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------- | ---------------------- |
| Alert          | `src/components/ui/alert.tsx`    | `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"` | Inline status message  |
| Progress       | `src/components/ui/progress.tsx` | `import { Progress } from "@/components/ui/progress"`                         | Progress indicator bar |
| Sonner (Toast) | `src/components/ui/sonner.tsx`   | `import { Toaster } from "@/components/ui/sonner"`                            | Toast notifications    |

---

## Layout

| Component   | Path                                | Import                                                                                                               | Purpose                     |
| ----------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Scroll Area | `src/components/ui/scroll-area.tsx` | `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"`                                                | Custom scrollable container |
| Resizable   | `src/components/ui/resizable.tsx`   | `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"`                   | Resizable panel layout      |
| Carousel    | `src/components/ui/carousel.tsx`    | `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"` | Scrollable content carousel |

---

## Utilities

| Component       | Path               | Import                             | Purpose                        |
| --------------- | ------------------ | ---------------------------------- | ------------------------------ |
| cn (classnames) | `src/lib/utils.ts` | `import { cn } from "@/lib/utils"` | Tailwind class merging utility |

---

## Hooks

| Hook      | Path                      | Import                                           | Purpose                |
| --------- | ------------------------- | ------------------------------------------------ | ---------------------- |
| useMobile | `src/hooks/use-mobile.ts` | `import { useMobile } from "@/hooks/use-mobile"` | Detect mobile viewport |

---

## Notes

- All components use Tailwind CSS for styling
- Components are built on Radix UI primitives
- Sonner requires `<Toaster />` in your layout to display toasts
- Form component requires `react-hook-form` and `zod` for validation
- Calendar uses `react-day-picker` under the hood
