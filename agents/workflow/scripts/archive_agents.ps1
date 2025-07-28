# PowerShell script to archive user stories and proposals per workflow protocol
# Usage: Run from project root. Archives all workflow .md files to archived/YYYY-MM-DD-HHMM/ and deletes originals.


$timestamp = Get-Date -Format "yyyy-MM-dd-HHmm"
$archiveDir = "agents\workflow\archived"
$target = Join-Path $archiveDir $timestamp

# Create archive directory
if (!(Test-Path $target)) {
    New-Item -ItemType Directory -Path $target | Out-Null
}

# Archive .md files in user-story, proposal, and implementation-strategies only
$dirsToArchive = @(
    "agents\workflow\user-story",
    "agents\workflow\proposal",
    "agents\workflow\implementation-strategies"
)

foreach ($dir in $dirsToArchive) {
    if (Test-Path $dir) {
        Get-ChildItem -Path $dir -Filter *.md -File | ForEach-Object {
            Move-Item $_.FullName $target
        }
    }
}

# Log archival
Write-Host "Archived all user-story, proposal, and implementation-strategies .md files to $target and deleted originals."
