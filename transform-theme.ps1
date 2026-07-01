# Theme transformation script: Ignorre → Wholesaleproperty theme
Write-Host "Starting theme transformation..." -ForegroundColor Green

$srcDir = "C:\Users\Admin\Desktop\updated ignorre\src"
$files = Get-ChildItem -Path $srcDir -Filter "*.jsx" | ForEach-Object { $_.FullName }
$files += Get-ChildItem -Path $srcDir -Filter "*.css" | ForEach-Object { $_.FullName }

foreach ($file in $files) {
    Write-Host "Processing: $file" -ForegroundColor Yellow
    $content = Get-Content -Path $file -Raw
    
    $original = $content
    
    # ===== BACKGROUND COLORS =====
    $content = $content -replace 'bg-\[#E3EAFF\]', 'bg-white'
    $content = $content -replace 'bg-\[#E5EBFF\]', 'bg-white'
    $content = $content -replace 'bg-\[#E3E9FF\]', 'bg-white'
    $content = $content -replace 'bg-\[#E1E8FF\]', 'bg-white'
    $content = $content -replace 'bg-\[#111111\]', 'bg-zinc-950'
    $content = $content -replace 'bg-\[#f3f4ff\]', 'bg-red-50'
    $content = $content -replace 'bg-\[#F9F9F9\]', 'bg-zinc-50'
    
    # ===== HEADING TEXT COLORS =====
    $content = $content -replace 'text-\[#312C85\]', 'text-zinc-950'
    $content = $content -replace 'text-\[#2d2a7a\]', 'text-zinc-950'
    $content = $content -replace 'text-\[#2D2A7A\]', 'text-zinc-950'
    $content = $content -replace 'text-\[#252E3D\]', 'text-zinc-950'
    
    # ===== BODY TEXT COLORS =====
    $content = $content -replace 'text-\[#585765\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#585757\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#4A5579\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#6B6D76\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#586579\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#656774\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#464B66\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#5c6475\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#373A46\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#40424E\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#444752\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#393C48\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#3E414D\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#383940\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#474955\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#494C57\]', 'text-zinc-500'
    $content = $content -replace 'text-\[#4B4D58\]', 'text-zinc-500'

    # ===== MUTED TEXT =====
    $content = $content -replace 'text-\[#949BAD\]', 'text-zinc-400'
    $content = $content -replace 'text-\[#838F8B\]', 'text-zinc-400'
    $content = $content -replace 'text-\[#828E8A\]', 'text-zinc-400'
    $content = $content -replace 'text-\[#87928F\]', 'text-zinc-400'
    $content = $content -replace 'text-\[#8A92A6\]', 'text-zinc-400'

    # ===== ACCENT / NAV COLORS =====
    $content = $content -replace 'text-\[#4F45F7\]', 'text-red-600'
    $content = $content -replace 'hover:text-\[#4F45F7\]', 'hover:text-red-600'
    $content = $content -replace 'hover:bg-\[#e6eafa\]', 'hover:bg-red-50'
    $content = $content -replace 'text-\[#364153\]', 'text-zinc-700'
    
    $content = $content -replace 'bg-\[#4F39F6\]', 'bg-red-600'
    $content = $content -replace 'bg-indigo-600', 'bg-red-600'
    $content = $content -replace 'hover:bg-indigo-700', 'hover:bg-red-700'
    $content = $content -replace 'hover:bg-indigo-600', 'hover:bg-red-600'

    # ===== PURPLE/BLUE GRADIENTS → RED =====
    $content = $content -replace 'from-blue-500 to-indigo-500', 'from-red-500 to-red-600'
    $content = $content -replace 'from-\[#4F83FF\] via-\[#3A6FF5\] to-\[#2F5FE8\]', 'from-red-600 via-red-700 to-red-800'
    $content = $content -replace 'from-\[#5A5A5A\] via-\[#565656\] to-\[#383838\]', 'from-zinc-800 via-zinc-800 to-zinc-900'
    $content = $content -replace 'from-\[#5A5A5A\] via-\[#4A4A4A\] to-\[#333333\]', 'from-zinc-800 via-zinc-800 to-zinc-900'
    $content = $content -replace 'from-\[#4A56E2\] via-\[#4F6BE3\] to-\[#3E82EC\]', 'from-red-600 via-red-700 to-red-800'
    
    $content = $content -replace 'text-purple-500', 'text-red-600'
    $content = $content -replace 'text-\[#B354FF\]', 'text-red-600'
    $content = $content -replace 'text-\[#5178FF\]', 'text-red-600'
    $content = $content -replace 'text-\[#5B61C0\]', 'text-red-600'
    $content = $content -replace 'text-\[#287AFF\]', 'text-red-600'
    $content = $content -replace 'text-\[#195EFF\]', 'text-red-600'
    
    $content = $content -replace 'border-\[#312C85\]', 'border-zinc-200'

    # ===== BUTTONS: Specific patterns with rounded-full → rounded-xl =====
    $content = $content -replace 'class="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition"', 'class="bg-zinc-950 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl text-sm transition"'
    $content = $content -replace 'class=" bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition"', 'class="bg-zinc-950 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition"'
    $content = $content -replace 'class="mt-6 bg-black text-white rounded-full py-2 w-full text-sm"', 'class="mt-6 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl py-2 w-full text-sm"'
    $content = $content -replace 'class="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium"', 'class="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl text-sm font-medium"'
    $content = $content -replace 'class="-mt-5 mb-10 sm:mb-15 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3"', 'class="-mt-5 mb-10 sm:mb-15 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition-all flex items-center gap-3"'
    $content = $content -replace 'class="mt-10 sm:mt-15 mb-10 sm:mb-15 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3"', 'class="mt-10 sm:mt-15 mb-10 sm:mb-15 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition-all flex items-center gap-3"'
    $content = $content -replace 'class="mt-5 mb-35 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3"', 'class="mt-5 mb-35 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition-all flex items-center gap-3"'
    $content = $content -replace 'class="mt-0 mb-10 sm:mb-15 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3"', 'class="mt-0 mb-10 sm:mb-15 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition-all flex items-center gap-3"'
    $content = $content -replace 'class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"', 'class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition-all"'
    $content = $content -replace 'class="bg-indigo-600 text-white px-6 py-4 font-semibold hover:bg-indigo-700 transition"', 'class="bg-red-600 text-white px-6 py-4 font-semibold hover:bg-red-700 transition"'
    $content = $content -replace '"bg-indigo-600 hover:bg-indigo-700"', '"bg-red-600 hover:bg-red-700"'
    $content = $content -replace 'class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105 mt-2"', 'class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-xl transition-all mt-2"'
    $content = $content -replace 'class="mt-6 bg-black text-white rounded-full py-2 w-full text-sm"', 'class="mt-6 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl py-2 w-full text-sm"'

    # ===== PRICING =====
    $content = $content -replace 'bg-\[#5B4DFF\]', 'bg-red-600'
    $content = $content -replace 'border-blue-600', 'border-red-600'
    $content = $content -replace 'shadow-\[0_0_40px_-15px_rgba\(37,99,235,0\.2\)\]', 'shadow-[0_0_40px_-15px_rgba(220,38,38,0.2)]'

    # ===== SEO PAGE GRADIENTS =====
    $content = $content -replace 'border-blue-600 bg-gradient-to-b from-\[#4F83FF\] via-\[#3A6FF5\] to-\[#2F5FE8\]', 'border-red-600 bg-gradient-to-b from-red-600 via-red-700 to-red-800'
    $content = $content -replace 'border-blue-700 bg-gradient-to-b from-\[#4F83FF\] via-\[#3A6FF5\] to-\[#2F5FE8\]', 'border-red-700 bg-gradient-to-b from-red-600 via-red-700 to-red-800'

    # ===== AI PAGE =====
    $content = $content -replace 'bg-\[#5C60BF\]', 'bg-red-600'
    $content = $content -replace 'to-\[#4671D7\]', 'to-red-700'
    $content = $content -replace 'from-\[#5C60BF\]', 'from-red-600'
    $content = $content -replace 'bg-gradient-to-tr from-\[#5C60BF\] to-\[#4671D7\]', 'bg-gradient-to-tr from-red-600 to-red-700'
    $content = $content -replace '"#5C60BF"', '"#DC2626"'
    # WARNING: The following pattern is dangerous - only run on .jsx files, not .css
    $content = $content -replace '#5C60BF', '#DC2626'

    # ===== BORDER COLORS =====
    $content = $content -replace 'border-gray-200', 'border-zinc-200'
    $content = $content -replace 'border-gray-300', 'border-zinc-200'
    $content = $content -replace 'border-gray-100', 'border-zinc-100'
    $content = $content -replace 'border-gray-400', 'border-zinc-300'
    $content = $content -replace 'border-gray-500', 'border-zinc-300'
    $content = $content -replace 'border-gray-800', 'border-zinc-300'
    $content = $content -replace 'hover:border-gray-700', 'hover:border-zinc-400'
    
    $content = $content -replace 'bg-gray-200/60', 'bg-zinc-100'
    $content = $content -replace 'bg-gray-200/70', 'bg-zinc-100'
    $content = $content -replace 'bg-gray-600', 'bg-zinc-700'

    # ===== FOOTER =====
    $content = $content -replace 'bg-\[#272727\]', 'bg-zinc-800'
    $content = $content -replace 'class="h-10 w-full max-w-xs sm:w-72 bg-white flex rounded-lg"', 'class="h-10 w-full max-w-xs sm:w-72 bg-zinc-800 flex rounded-lg"'

    # ===== FOCUS RINGS =====
    $content = $content -replace 'focus-within:ring-indigo-500', 'focus-within:ring-red-500'
    $content = $content -replace 'focus-within:ring-1 focus-within:ring-indigo-500', 'focus-within:ring-1 focus-within:ring-red-500'

    # ===== LINK HOVERS =====
    $content = $content -replace 'hover:text-gray-600', 'hover:text-zinc-600'
    $content = $content -replace 'hover:bg-gray-900', 'hover:bg-zinc-800'

    # Save only if changes were made
    if ($content -ne $original) {
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "  ✅ Updated" -ForegroundColor Green
    } else {
        Write-Host "  ⏭️  No changes" -ForegroundColor Gray
    }
}

Write-Host "`nTheme transformation complete!" -ForegroundColor Green
